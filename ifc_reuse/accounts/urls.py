from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('upload_profile_image/', views.upload_profile_image, name='upload_profile_image'),
    path('edit_profile/', views.edit_profile, name='profile'),
    path('profile/<str:username>/', views.public_profile, name='public_profile'),
    path('upload_architecture_image/', views.upload_architecture_image, name='upload_architecture_image'),
]