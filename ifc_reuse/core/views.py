from django.views.decorators.http import require_http_methods, require_GET, require_POST
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib import messages
from django.contrib.auth.models import User
from django.db import IntegrityError
from .models import ReusableComponent, UploadedIFC, ComponentComment, Favorite
from .utils import get_element_info, save_metadata_and_create_component
from typing import Dict, Optional
import json
import os

def index(request):
    return render(request, "reuse/index.html")

def catalog(request):
    components = ReusableComponent.objects.select_related('ifc_file').all()
    return render(request, "reuse/catalog.html")

def categories(request):
    components = ReusableComponent.objects.select_related('ifc_file').all()
    categories = {}
    for component in components:
        cat = component.component_type or 'Unknown'
        info = {
            'name': component.material_name or 'Unnamed',
            'global_id': component.global_id or component.json_file_path.split('/')[-1].replace('.json', '')
        }
        categories.setdefault(cat, []).append(info)

    favorite_global_ids = set()
    if request.user.is_authenticated:
        favorite_global_ids = set(
            Favorite.objects.filter(user=request.user).values_list('component__global_id', flat=True)
        )

    return render(request, 'reuse/catalog.html', {
        'categories': categories,
        'components': components,
        'favorite_global_ids': favorite_global_ids
    })

def catalog_api(request):
    components = ReusableComponent.objects.select_related('ifc_file').all()
    categories = {}
    for component in components:
        cat = component.component_type or 'Unknown'
        info = {
            'name': component.component_type or 'Unnamed',
            'global_id': component.global_id or component.json_file_path.split('/')[-1].replace('.json', '')
        }
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
    model_id = request.GET.get("model_id")
    express_id = request.GET.get("express_id")
    filename = request.GET.get("filename")
    metadata_param = request.GET.get("metadata")
    model_uuid = request.GET.get("model_uuid")
    if not model_id or express_id is None:
        return JsonResponse({"error": "model_id and express_id required"}, status=400)
    try:
        model_id_int = int(model_id)
        express_int = int(express_id)
    except (ValueError, TypeError):
        return JsonResponse({"error": "Invalid model_id or express_id"}, status=400)
    try:
        upload = UploadedIFC.objects.get(pk=model_id_int)
    except UploadedIFC.DoesNotExist:
        return JsonResponse({"error": "model not found"}, status=404)
    ifc_path = upload.file.path
    info = get_element_info(ifc_path, express_int)
    if filename and metadata_param:
        try:
            metadata = json.loads(metadata_param)
        except Exception:
            metadata = {}
        metadata.setdefault("expressID", express_int)
        if model_uuid:
            metadata.setdefault("modelUUID", model_uuid)
        save_metadata_and_create_component(metadata, filename, model_id=model_id_int)
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
        "global_id",
    )
    return JsonResponse(list(components), safe=False)

@require_POST
def upload_ifc(request):
    file = request.FILES.get("file")
    if not file:
        return JsonResponse({"error": "No file provided"}, status=400)
    project_name = request.POST.get("project_name", "")
    location = request.POST.get("location", "")
    upload = UploadedIFC.objects.create(
        name=file.name,
        file=file,
        project_name=project_name,
        location=location,
        user=request.user if request.user.is_authenticated else None
    )

    return JsonResponse(
        {
            "status": "uploaded",
            "file_url": upload.file.url,
            "id": upload.id,
    })

@require_GET
def get_comments(request):
    global_id = request.GET.get('global_id')
    if not global_id:
        return JsonResponse({"error": "global_id required"}, status=400)
    try:
        component = ReusableComponent.objects.get(global_id=global_id)
        comments = ComponentComment.objects.filter(component=component).values(
            'author__username', 'text', 'created_at'
        )
        return JsonResponse(list(comments), safe=False)
    except ReusableComponent.DoesNotExist:
        return JsonResponse([], safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@require_POST
@login_required
def add_comment(request):
    try:
        data = json.loads(request.body)
        global_id = data.get('global_id')
        text = data.get('text')
        if not global_id or not text:
            return JsonResponse({"error": "global_id and text required"}, status=400)
        component = ReusableComponent.objects.get(global_id=global_id)
        ComponentComment.objects.create(
            component=component,
            global_id=global_id,
            author=request.user,
            text=text
        )
        return JsonResponse({"status": "success"})
    except ReusableComponent.DoesNotExist:
        return JsonResponse({"error": "Component not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@require_GET
def get_component_author(request):
    global_id = request.GET.get('global_id')
    if not global_id:
        return JsonResponse({"error": "global_id required"}, status=400)
    try:
        component = ReusableComponent.objects.get(global_id=global_id)
        if component.ifc_file.user:
            return JsonResponse({"username": component.ifc_file.user.username})
        else:
            return JsonResponse({"error": "No author associated"}, status=404)
    except ReusableComponent.DoesNotExist:
        return JsonResponse({"error": "Component not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@login_required
@require_POST
def toggle_favorite(request):
    try:
        data = json.loads(request.body)
        global_id = data.get('global_id')
        if not global_id:
            return JsonResponse({"error": "global_id required"}, status=400)
        component = ReusableComponent.objects.get(global_id=global_id)
        favorite, created = Favorite.objects.get_or_create(user=request.user, component=component)
        if not created:
            favorite.delete()
            return JsonResponse({"status": "removed", "is_favorite": False})
        return JsonResponse({"status": "added", "is_favorite": True})
    except ReusableComponent.DoesNotExist:
        return JsonResponse({"error": "Component not found"}, status=404)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)


@require_POST
def save_fragment(request):
    """Save uploaded fragment file to MEDIA_ROOT/fragments/{global_id}.frag"""
    frag_file = request.FILES.get("fragment")
    global_id = request.POST.get("global_id")

    if not frag_file or not global_id:
        return JsonResponse({"error": "fragment and global_id required"}, status=400)

    fragments_dir = os.path.join(settings.MEDIA_ROOT, "fragments")
    os.makedirs(fragments_dir, exist_ok=True)

    file_path = os.path.join(fragments_dir, f"{global_id}.frag")
    default_storage.save(file_path, frag_file)

    return JsonResponse({"status": "saved", "path": os.path.join(settings.MEDIA_URL, "fragments", f"{global_id}.frag")})
