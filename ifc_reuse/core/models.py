from django.db import models
from django.contrib.auth.models import User

def ifc_file_path(instance, filename):
    return f'ifc_files/user_{instance.user.id if instance.user else "anonymous"}/{filename}'

class UploadedIFC(models.Model):
    name = models.CharField(max_length=256)
    file = models.FileField(upload_to='ifc_files/')
    project_name = models.CharField(max_length=256, blank=True)
    location = models.CharField(max_length=256, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='uploaded_ifcs')

    def __str__(self):
        return self.name

class ReusableComponent(models.Model):
    ifc_file = models.ForeignKey(UploadedIFC, on_delete=models.CASCADE, related_name="components")
    component_type = models.CharField(max_length=100)
    storey = models.CharField(max_length=100, null=True, blank=True)
    material_name = models.CharField(max_length=255, null=True, blank=True)
    json_file_path = models.TextField()
    uploaded_at = models.DateTimeField(auto_now_add=True)
    global_id = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"{self.component_type} ({self.ifc_file.name})"

class ComponentComment(models.Model):
    component = models.ForeignKey(ReusableComponent, on_delete=models.CASCADE, related_name="comments")
    global_id = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Comment by {self.author} on {self.global_id}"

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='favorites')
    component = models.ForeignKey(ReusableComponent, on_delete=models.CASCADE, related_name='favorited_by')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'component')

    def __str__(self):
        return f"{self.user.username} favorites {self.component.global_id}"
