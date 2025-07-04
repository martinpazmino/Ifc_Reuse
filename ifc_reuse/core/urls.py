from django.urls import path
from . import views
from .views import generate_passport_view
app_name = 'core'

urlpatterns = [
    path('', views.index, name='index'),
    path('catalog/', views.categories, name='catalog'),
    path('upload/', views.upload_page, name='upload_page'),
    path('upload-ifc/', views.upload_ifc, name='upload_ifc'),
    path('viewer/<int:model_id>/', views.viewer_page, name='viewer_page'),
    path('about/', views.about, name='about'),
    path('settings/', views.account_settings, name='settings'),
    path('list-ifcs/', views.list_uploaded_ifcs, name='list_ifcs'),
    path('ifc-files/', views.ifc_files_api, name='ifc_files_api'),
    path('reusable-components/', views.reusable_components, name='reusable_components'),
    path('api/catalog/', views.catalog_api, name='catalog_api'),
    path('get-element-info/', views.get_element_info_view, name='get_element_info'),
    path('save-component-metadata/', views.save_metadata_and_create_component, name='save_component_metadata'),
    path('comments/', views.get_comments, name='get_comments'),
    path('add-comment/', views.add_comment, name='add_comment'),
    path('api/component-author/', views.get_component_author, name='get_component_author'),
    path('api/toggle-favorite/', views.toggle_favorite, name='toggle_favorite'),
    path('save-fragment/', views.save_fragment, name='save_fragment'),
    path('extract-component/', views.extract_component, name='extract_component'),
    path('generate-passport/', generate_passport_view, name='generate-passport'),
]