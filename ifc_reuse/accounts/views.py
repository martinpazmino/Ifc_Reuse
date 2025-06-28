from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registrierung erfolgreich!")
            return redirect('core:index')
        else:
            for error in form.errors.values():
                messages.error(request, error)
    else:
        form = UserRegistrationForm()
    return render(request, 'accounts/register.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('core:index')
        else:
            messages.error(request, "Ungültiger Benutzername oder Passwort.")
    return render(request, 'accounts/login.html')

@login_required
def edit_profile(request):
    if request.method == 'POST':
        user = request.user
        user.email = request.POST.get('email', user.email)
        user.first_name = request.POST.get('first_name', user.first_name)
        user.last_name = request.POST.get('last_name', user.last_name)
        user.save()
        messages.success(request, "Profil erfolgreich aktualisiert.")
        return redirect('accounts:profile')
    return render(request, 'accounts/edit_profile.html', {
        'user': request.user,
        'favorites': request.user.favorites.select_related('component__ifc_file').all()
    })

def upload_profile_image(request):
    if request.method == 'POST' and request.FILES.get('profile_image'):
        profile = request.user.profile
        profile.image = request.FILES['profile_image']
        profile.save()
        messages.success(request, "Profilbild erfolgreich hochgeladen.")
        return redirect('accounts:profile')
    return render(request, 'accounts/upload_profile_image.html')

def user_logout(request):
    logout(request)
    return redirect('accounts:login')

def public_profile(request, username):
    user = get_object_or_404(User, username=username)
    return render(request, 'accounts/public_profile.html', {'user': user})

@login_required
def upload_architecture_image(request):
    if request.method == 'POST':
        profile = request.user.profile
        architecture_image = request.FILES.get('architecture_image')
        architecture_option = request.POST.get('architecture_option')
        if architecture_image:
            profile.architecture_image = architecture_image
            profile.architecture_option = architecture_option
            profile.save()
            messages.success(request, "Architekturbild erfolgreich hochgeladen!")
        else:
            messages.error(request, "Bitte wähle ein Bild aus.")
        return redirect('accounts:profile')
    return redirect('accounts:profile')