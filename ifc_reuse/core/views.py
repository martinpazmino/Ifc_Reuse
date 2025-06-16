
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import ReusableComponent, UploadedIFC

from django.conf import settings
from .utils import get_element_info, save_metadata_and_create_component
import json
import os
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib import messages
from django.contrib.auth.models import User
from django.db import IntegrityError


def index(request):
    return render(request, "reuse/index.html")


def catalog(request):
    return render(request, "reuse/catalog.html")


def categories(request):
    comp_dir = os.path.join(settings.MEDIA_ROOT, "reusable_components")
    categories = {}
    if os.path.isdir(comp_dir):
        for fname in os.listdir(comp_dir):
            if not fname.endswith(".json"):
                continue
            path = os.path.join(comp_dir, fname)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    data = json.load(f)
            except Exception:
                continue

            cat = data.get("type", "Unknown")
            name = data.get("Name")
            if isinstance(name, dict):
                name = name.get("value")
            gid = data.get("GlobalId")
            if isinstance(gid, dict):
                gid = gid.get("value")

            info = {"name": name or "Unnamed", "global_id": gid or ""}
            categories.setdefault(cat, []).append(info)

    return render(request, "reuse/catalog.html", {"categories": categories})


def catalog_api(request):
    """Return components grouped by type as JSON.

    This version reads the metadata JSON files stored under
    ``MEDIA_ROOT/reusable_components`` instead of querying the
    ``ReusableComponent`` model.  Each ``*.json`` file is expected to
    contain keys like ``type``, ``Name`` and ``GlobalId``.  Components are
    grouped by the ``type`` value.
    """

    comp_dir = os.path.join(settings.MEDIA_ROOT, "reusable_components")
    categories = {}

    if os.path.isdir(comp_dir):
        for fname in os.listdir(comp_dir):
            if not fname.endswith(".json"):
                continue
            path = os.path.join(comp_dir, fname)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    data = json.load(f)
            except Exception:
                # Skip unreadable or invalid JSON files
                continue

            cat = data.get("type", "Unknown")
            name = data.get("Name")
            if isinstance(name, dict):
                name = name.get("value")
            gid = data.get("GlobalId")
            if isinstance(gid, dict):
                gid = gid.get("value")

            info = {"name": name or "Unnamed", "global_id": gid or ""}
            categories.setdefault(cat, []).append(info)

    return JsonResponse(categories)


def upload_page(request):
    return render(request, 'reuse/upload.html')


def viewer_page(request, model_id):
    return render(request, 'reuse/viewer.html', {'model_id': model_id})


def about(request):
    return render(request, 'reuse/about.html')


@login_required
def account_settings(request):
    if request.method == 'POST':
        form_type = request.POST.get('form_type')

        if form_type == 'email':
            new_email = request.POST.get('email')
            if new_email:
                try:
                    # Verificar si el correo ya está en uso
                    if User.objects.filter(email=new_email).exclude(id=request.user.id).exists():
                        messages.error(request, "Diese E-Mail-Adresse ist bereits vergeben.")
                    else:
                        request.user.email = new_email
                        request.user.save()
                        messages.success(request, "E-Mail erfolgreich geändert.")
                except IntegrityError:
                    messages.error(request, "Fehler beim Speichern der E-Mail-Adresse.")
            else:
                messages.error(request, "Bitte geben Sie eine gültige E-Mail-Adresse ein.")

        elif form_type == 'password':
            current_password = request.POST.get('current_password')
            new_password = request.POST.get('new_password')
            new_password_confirm = request.POST.get('new_password_confirm')

            # Validar contraseña actual
            user = authenticate(username=request.user.username, password=current_password)
            if user is None:
                messages.error(request, "Das aktuelle Passwort ist falsch.")
            elif new_password != new_password_confirm:
                messages.error(request, "Die neuen Passwörter stimmen nicht überein.")
            elif len(new_password) < 8:
                messages.error(request, "Das neue Passwort muss mindestens 8 Zeichen lang sein.")
            else:
                request.user.set_password(new_password)
                request.user.save()
                messages.success(request, "Passwort erfolgreich geändert. Bitte melden Sie sich erneut an.")
                return redirect('accounts:login')

    return render(request, 'reuse/settings.html')


def list_uploaded_ifcs(request):
    files = UploadedIFC.objects.all().order_by('-uploaded_at')
    data = [
        {
            'id': file.id,
            'name': file.name,
            'url': file.file.url,
            'project_name': file.project_name,
            'location': file.location,
        }
        for file in files
    ]
    return JsonResponse(data, safe=False)


def ifc_files_api(request):
    ifc_dir = os.path.join(settings.MEDIA_ROOT, 'ifc_files')
    files = []
    for filename in os.listdir(ifc_dir):
        if filename.endswith('.ifc'):
            files.append({
                'name': filename,
                'url': f"{settings.MEDIA_URL}ifc_files/{filename}"
            })
    return JsonResponse(files, safe=False)


@require_http_methods(["GET"])
def get_element_info_view(request):
    """Return metadata for a single IFC element."""
    model_id = request.GET.get("model_id")
    express_id = request.GET.get("express_id")
    filename = request.GET.get("filename")
    metadata_param = request.GET.get("metadata")
    model_uuid = request.GET.get("model_uuid")
    if not model_id or express_id is None:
        return JsonResponse({"error": "model_id and express_id required"}, status=400)

    try:
        upload = UploadedIFC.objects.get(pk=model_id)
    except UploadedIFC.DoesNotExist:
        return JsonResponse({"error": "model not found"}, status=404)

    ifc_path = upload.file.path
    express_int = int(express_id)
    info = get_element_info(ifc_path, express_int)

    if filename and metadata_param:
        try:
            metadata = json.loads(metadata_param)
        except Exception:
            metadata = {}

        metadata.setdefault("expressID", express_int)
        if model_uuid:
            metadata.setdefault("modelUUID", model_uuid)

        save_metadata_and_create_component(metadata, filename)

    return JsonResponse(info)




@require_http_methods(["POST"])

def reusable_components(request):
    components = ReusableComponent.objects.select_related("ifc_file").all().values(
        "id",
        "ifc_file__id",
        "ifc_file__name",
        "component_type",
        "storey",
        "material_name",
        "json_file_path",
        "uploaded_at",
    )
    return JsonResponse(list(components), safe=False)


@require_http_methods(["POST"])
def save_component_metadata(request):
    """Save metadata JSON and create a ``ReusableComponent`` entry."""

    try:
        payload = json.loads(request.body.decode("utf-8"))
    except Exception:
        return JsonResponse({"error": "Invalid JSON"}, status=400)

    metadata = payload.get("metadata")
    filename = payload.get("filename")

    if not isinstance(metadata, dict) or not filename:
        return JsonResponse({"error": "metadata and filename required"}, status=400)

    path = save_metadata_and_create_component(metadata, filename)

    return JsonResponse({"path": path})





