from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("catalog/", views.catalog, name="catalog"),
    path("upload/", views.upload_page, name="upload_page"),
    path("api/", views.api_view, name="api"),
    path("about/", views.about, name="about"),
    path("mark-component/", views.mark_component, name="mark-component"),
    path("catalog-components/", views.reusable_components, name="reusable-components"),
    path("upload-ifc/", views.upload_ifc_file, name="upload-ifc"),
    path("ifc-files/", views.list_uploaded_ifcs, name="ifc-file-list"),
    path("upload-fragment/", views.upload_fragment, name="upload_fragment"),
    path("viewer/<str:model_id>/", views.viewer_page, name="viewer_page"),
    path('fragment-files/', views.list_fragments, name='fragment-files'),
]