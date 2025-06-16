from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import ReusableComponent, UploadedIFC
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
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
    if not model_id or express_id is None:
        return JsonResponse({"error": "model_id and express_id required"}, status=400)

    try:
        upload = UploadedIFC.objects.get(pk=model_id)
    except UploadedIFC.DoesNotExist:
        return JsonResponse({"error": "model not found"}, status=404)

    ifc_path = upload.file.path
    info = get_element_info(ifc_path, int(express_id))
    return JsonResponse(info)


@csrf_exempt
def upload_fragment(request):
    if request.method == "POST" and request.FILES:
        frag_file = request.FILES.get("fragment")
        json_file = request.FILES.get("metadata")
        base_path = "reusable_components/"
        frag_path = default_storage.save(
            os.path.join(base_path, frag_file.name),
            ContentFile(frag_file.read())
        )

        metadata = json.loads(json_file.read().decode("utf-8"))

        ifc_filename = metadata.get("modelUUID")
        express_id = metadata.get("expressID")
        if ifc_filename and express_id is not None:
            ifc_path = os.path.join(settings.MEDIA_ROOT, "ifc_files", f"{ifc_filename}.ifc")
            info = get_element_info(ifc_path, int(express_id))
            metadata["Type"] = info.get("type", "Unknown")
            if "predefinedType" in info:
                metadata["PredefinedType"] = info["predefinedType"]
            if "material" in info:
                metadata["Material"] = info["material"]
            metadata["materials"] = info.get("materials", [])
            if "storey" in info:
                metadata["Storey"] = info["storey"]

            try:
                upload = UploadedIFC.objects.get(file__contains=ifc_filename)
                metadata["Location"] = upload.location or metadata.get("Location", "Unknown")
            except UploadedIFC.DoesNotExist:
                pass

        json_path = save_metadata_and_create_component(metadata, json_file.name)

        return JsonResponse({
            "status": "ok",
            "fragment_url": default_storage.url(frag_path),
            "metadata_url": default_storage.url(json_path),
        })
    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)


@require_http_methods(["POST"])
def mark_component(request):
    """Create a :class:`ReusableComponent` from an uploaded fragment.

    The request must contain JSON with a ``json_file_path`` key.  Previously the
    view assumed valid input which could lead to uncaught exceptions and a 500
    response.  Extra validation is now performed so bad requests result in a
    clear error message.
    """

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "invalid JSON"}, status=400)

    json_file_path = data.get("json_file_path")
    if not json_file_path:
        return JsonResponse({"error": "json_file_path required"}, status=400)

    full_json_path = os.path.normpath(os.path.join(settings.MEDIA_ROOT, json_file_path))
    if not full_json_path.startswith(str(settings.MEDIA_ROOT)):
        return JsonResponse({"error": "invalid path"}, status=400)

    try:
        with open(full_json_path, "r", encoding="utf-8") as f:
            metadata = json.load(f)
    except FileNotFoundError:
        return JsonResponse({"error": "metadata file not found"}, status=404)
    except json.JSONDecodeError:
        return JsonResponse({"error": "invalid metadata JSON"}, status=400)

    express_id = metadata.get("expressID")
    model_uuid = metadata.get("modelUUID")
    if express_id is None or not model_uuid:
        return JsonResponse({"error": "invalid metadata"}, status=400)

    try:
        express_id_int = int(express_id)
    except (TypeError, ValueError):
        return JsonResponse({"error": "invalid expressID"}, status=400)

    ifc_path = os.path.join(settings.MEDIA_ROOT, "ifc_files", f"{model_uuid}.ifc")
    info = get_element_info(ifc_path, express_id_int)

    try:
        upload = UploadedIFC.objects.get(file__contains=model_uuid)
    except UploadedIFC.DoesNotExist:
        return JsonResponse({"error": "model not found"}, status=404)
    except UploadedIFC.MultipleObjectsReturned:
        upload = UploadedIFC.objects.filter(file__contains=model_uuid).first()

    component = ReusableComponent.objects.create(
        ifc_file=upload,
        component_type=info.get("type", "Unknown"),
        storey=info.get("storey"),
        material_name=info.get("material"),
        json_file_path=json_file_path,
    )

    return JsonResponse({"status": "ok", "component_id": component.id})


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



def upload_ifc_file(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'error': 'No file provided'}, status=400)

    project_name = request.POST.get('project_name', '')
    location = request.POST.get('location', '')

    instance = UploadedIFC.objects.create(
        name=file.name,
        file=file,
        project_name=project_name,
        location=location,
    )

    return JsonResponse({
        'status': 'uploaded',
        'file_url': instance.file.url,
        'id': instance.id,
    })
