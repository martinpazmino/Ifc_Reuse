from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),

    path('catalog/', views.categories, name='catalog'),
    path('upload/', views.upload_page, name='upload_page'),
    path('viewer/<int:model_id>/', views.viewer_page, name='viewer_page'),
    path('about/', views.about, name='about'),
    path('settings/', views.account_settings, name='settings'),
    path('list-ifcs/', views.list_uploaded_ifcs, name='list_ifcs'),
    path('ifc-files/', views.ifc_files_api, name='ifc_files_api'),
    path('upload-fragment/', views.upload_fragment, name='upload_fragment'),
    path('mark-component/', views.mark_component, name='mark_component'),
    path('reusable-components/', views.reusable_components, name='reusable_components'),
    path('api/catalog/', views.catalog_api, name='catalog_api'),
    path('get-element-info/', views.get_element_info_view, name='get_element_info'),
    path('upload-ifc/', views.upload_ifc_file, name='upload_ifc'),
]