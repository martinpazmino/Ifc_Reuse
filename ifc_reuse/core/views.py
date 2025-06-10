from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import ReusableComponent, UploadedIFC
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from .utils import get_element_info
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


def upload_page(request):
    return render(request, 'reuse/upload.html')


def api_view(request):
    return render(request, 'reuse/api.html')


def viewer_page(request, model_id):
    return render(request, 'reuse/viewer.html', {'model_id': model_id})


def about(request):
    return render(request, 'reuse/about.html')


@login_required
def settings(request):
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


@login_required
def select(request, model_id):
    return render(request, 'reuse/select.html', {'model_id': model_id})


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

        json_content = json.dumps(metadata, indent=2)
        json_path = default_storage.save(
            os.path.join(base_path, json_file.name),
            ContentFile(json_content.encode("utf-8"))
        )
        return JsonResponse({
            "status": "ok",
            "fragment_url": default_storage.url(frag_path),
            "metadata_url": default_storage.url(json_path),
        })
    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)


def mark_component(request):
    if request.method == "POST":
        data = json.loads(request.body)
        component, created = ReusableComponent.objects.get_or_create(
            global_id=data['global_id'],
            defaults={
                'name': data['name'],
                'type': data['type']
            }
        )
        return JsonResponse({'status': 'ok', 'created': created})


def reusable_components(request):
    components = ReusableComponent.objects.all().values(
        'global_id', 'name', 'type', 'created_at'
    )
    return JsonResponse(list(components), safe=False)


@require_http_methods(["POST"])
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
