from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("catalog/", views.catalog, name="catalog"),
    path('upload/', views.upload_page, name='upload_page'),
    path('api/', views.api_view, name='api'),
    path('about/', views.about, name='about'),
    path("api/mark-component/", views.mark_component, name="mark-component"),
    path("api/catalog/", views.reusable_components, name="reusable-components"),
    path("api/upload-ifc/", views.upload_ifc_file, name="upload-ifc"),
    path("api/ifc-files/", views.list_uploaded_ifcs, name="ifc-file-list"),
    path("api/upload-fragment/", views.upload_fragment, name="upload-fragment"),
    path('viewer/<str:model_id>/', views.viewer_page, name='viewer_page'),
]
