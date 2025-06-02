from django.db import models

class ReusableComponent(models.Model):
    global_id = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    metadata_url = models.URLField(max_length=500, null=True, blank=True)
    fragment_url = models.URLField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name
class UploadedIFC(models.Model):
    name = models.CharField(max_length=256)
    file = models.FileField(upload_to='ifc_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
