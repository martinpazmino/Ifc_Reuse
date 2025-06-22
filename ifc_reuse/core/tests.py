from django.test import TestCase, Client
from django.urls import reverse
from django.core.files.uploadedfile import SimpleUploadedFile

from .models import UploadedIFC

class ExtractComponentViewTests(TestCase):
    def setUp(self):
        try:
            import ifcopenshell # noqa: F401
        except Exception:
            self.skipTest("ifcopenshell not installed")
        self.client = Client()
        self.upload = UploadedIFC.objects.create(
            name="test.ifc",
            file=SimpleUploadedFile("test.ifc", b"IFC"),
        )

    def test_missing_parameters(self):
        response = self.client.post(
            reverse('core:extract_component'),
            data={},
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400)
