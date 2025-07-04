from django.db import models
from django.contrib.auth.models import User

def user_directory_path(instance, filename):
    return f'user_{instance.user.id}/{filename}'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=user_directory_path, default='default_profile.jpg')
    architecture_image = models.ImageField(upload_to=user_directory_path, null=True, blank=True)
    architecture_option = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'
