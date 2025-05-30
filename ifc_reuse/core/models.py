from django.db import models

class ReusableComponent(models.Model):
    global_id = models.CharField(max_length=64, unique=True)
    name = models.CharField(max_length=256)
    type = models.CharField(max_length=128)
    user_comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
class UploadedIFC(models.Model):
    name = models.CharField(max_length=256)
    file = models.FileField(upload_to='ifc_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
