from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from .models import ReusableComponent, UploadedIFC
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import json
from django.conf import settings
from django.http import JsonResponse
import os


def list_fragments(request):
    frag_dir = os.path.join(settings.MEDIA_ROOT, 'reusable/components/frag')
    files = []
    if os.path.exists(frag_dir):
        for fname in os.listdir(frag_dir):
            if fname.endswith('.frag'):
                files.append({
                    'name': fname,
                    'url': f"{settings.MEDIA_URL}reusable/components/frag/{fname}"
                })
    return JsonResponse(files, safe=False)


# Render the IFC viewer page
def index(request):
    return render(request, "reuse/index.html")

# Render the component catalog page
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


def list_uploaded_ifcs(request):
    files = UploadedIFC.objects.all().order_by('-uploaded_at')
    data = [
        {
            'name': file.name,
            'url': file.file.url
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

# Save marked component from JavaScript
@csrf_exempt
@require_http_methods(["POST"])
def upload_fragment(request):
    if request.method == "POST" and request.FILES:
        frag_file = request.FILES.get("fragment")
        json_file = request.FILES.get("metadata")

        if not json_file:
            return JsonResponse({"status": "error", "message": "Metadata file (.json) is required"}, status=400)

        base_path = "reusable_components/"
        json_path = default_storage.save(os.path.join(base_path, json_file.name), ContentFile(json_file.read()))
        json_url = default_storage.url(json_path)

        frag_url = None
        if frag_file:
            frag_path = default_storage.save(os.path.join(base_path, frag_file.name), ContentFile(frag_file.read()))
            frag_url = default_storage.url(frag_path)

        # Save component metadata to ReusableComponent model
        json_data = json.loads(json_file.read())
        component, created = ReusableComponent.objects.get_or_create(
            global_id=json_data.get('GlobalId', json_data.get('expressID', 'unknown')),
            defaults={
                'name': json_data.get('Name', 'Unnamed Component'),
                'type': json_data.get('type', 'Unknown'),
                'metadata_url': json_url,
                'fragment_url': frag_url
            }
        )
        if not created:
            component.metadata_url = json_url
            component.fragment_url = frag_url
            component.save()

        return JsonResponse({
            "status": "ok",
            "fragment_url": frag_url,
            "metadata_url": json_url,
        })
    return JsonResponse({"status": "error", "message": "Invalid request or no files provided"}, status=400)

# Save marked component metadata
@csrf_exempt
@require_http_methods(["POST"])
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

# Return all saved components as JSON
def reusable_components(request):
    components = ReusableComponent.objects.all().values(
        'global_id', 'name', 'type', 'created_at', 'metadata_url', 'fragment_url'
    )
    return JsonResponse(list(components), safe=False)

@require_http_methods(["POST"])
def upload_ifc_file(request):
    file = request.FILES.get('file')
    if not file:
        return JsonResponse({'error': 'No file provided'}, status=400)

    instance = UploadedIFC.objects.create(name=file.name, file=file)
    return JsonResponse({'status': 'uploaded', 'file_url': instance.file.url})