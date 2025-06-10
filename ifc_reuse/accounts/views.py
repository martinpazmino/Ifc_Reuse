from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.db import IntegrityError

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            login(request, user)
            messages.success(request, "Registrierung erfolgreich!")
            return redirect('core:index')
        else:
            messages.error(request, "Registrierung fehlgeschlagen. Bitte überprüfe deine Eingaben.")
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
        return redirect('accounts:profile')  # Cambiado a accounts:profile
    return render(request, 'accounts/edit_profile.html')

def upload_profile_image(request):
    if request.method == 'POST' and request.FILES.get('profile_image'):
        profile = request.user.profile
        profile.image = request.FILES['profile_image']
        profile.save()
        return redirect('accounts:profile')  # Cambiado a accounts:profile
    return render(request, 'accounts/upload_profile_image.html')

def user_logout(request):
    logout(request)
    return redirect('accounts:login')  # Cambiado a accounts:login


@login_required
def settings(request):
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
