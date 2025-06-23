from django.db import models
from django.contrib.auth.models import User

def ifc_file_path(instance, filename):
    return f'ifc_files/user_{instance.user.id if instance.user else "anonymous"}/{filename}'

class UploadedIFC(models.Model):
    name = models.CharField(max_length=256)
    file = models.FileField(upload_to=ifc_file_path)
    project_name = models.CharField(max_length=256, blank=True)
    location = models.CharField(max_length=256, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='uploaded_ifcs')

    def __str__(self):
        return self.name

class ReusableComponent(models.Model):
    ifc_file = models.ForeignKey(UploadedIFC, on_delete=models.CASCADE, related_name="reusable_components")
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

class Chat(models.Model):
    participants = models.ManyToManyField(User, related_name='chats')
    last_message = models.TextField(blank=True)
    last_message_timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Chat with {', '.join([p.username for p in self.participants.all()])}"

class Message(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender.username}: {self.text[:20]}"

class Component(models.Model):
    material_name = models.CharField(max_length=255, blank=True)
    global_id = models.CharField(max_length=255, unique=True, blank=True)
    ifc_file = models.ForeignKey(UploadedIFC, on_delete=models.SET_NULL, null=True, blank=True, related_name='components')
    category = models.CharField(max_length=100)
    material = models.CharField(max_length=255, blank=True)
    dimensions = models.CharField(max_length=255, blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    favorites = models.ManyToManyField(User, related_name='favorite_components')

    def __str__(self):
        return self.material_name or self.global_id

    @property
    def project_name(self):
        return self.ifc_file.project_name if self.ifc_file else "N/A"