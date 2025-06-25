from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from rest_framework.test import APIClient
from core.models import UploadedIFC, ReusableComponent
import ifcopenshell
import tempfile
import os


class IFCTestCase(TestCase):
    def setUp(self):
        try:
            import ifcopenshell
        except ImportError:
            self.skipTest("ifcopenshell not installed")

        # Crear un usuario de prueba
        self.user = User.objects.create_user(
            username='testuser',
            email='test@example.com',
            password='testpass123'
        )

        # Crear un archivo IFC simulado usando un archivo temporal
        self.ifc_file = ifcopenshell.file(schema='IFC4')  # Especificar esquema IFC4
        wall = self.ifc_file.create_entity('IfcWall', Name='TestWall')
        wall.GlobalId = 'test123'

        # Usar un archivo temporal para escribir el IFC
        with tempfile.NamedTemporaryFile(suffix='.ifc', delete=False) as temp_file:
            self.ifc_file.write(temp_file.name)
            temp_file_path = temp_file.name

        # Leer el contenido del archivo temporal
        with open(temp_file_path, 'rb') as file:
            content = file.read()

        # Eliminar el archivo
        os.remove(temp_file_path)

        self.uploaded_file = SimpleUploadedFile(
            'test.ifc',
            content,
            content_type='application/octet-stream'
        )

        # Crear un registro UploadedIFC
        self.uploaded_ifc = UploadedIFC.objects.create(
            name='Test IFC',
            file=self.uploaded_file,
            project_name='Test Project',
            location='Test Location',
            user=self.user
        )

        # Crear un componente reutilizable para el catálogo
        self.component = ReusableComponent.objects.create(
            ifc_file=self.uploaded_ifc,
            component_type='IfcWall',
            material_name='Concrete',
            json_file_path='reusable_components/test123.json',
            global_id='test123'
        )

        self.client = Client()
        self.api_client = APIClient()

    def test_uploaded_ifc_creation(self):
        """Prueba la creación de un registro UploadedIFC"""
        self.assertEqual(self.uploaded_ifc.name, 'Test IFC')
        self.assertEqual(self.uploaded_ifc.project_name, 'Test Project')
        self.assertEqual(self.uploaded_ifc.user, self.user)
        self.assertEqual(str(self.uploaded_ifc), 'Test IFC')

    def test_catalog_api(self):
        """Prueba el endpoint /api/catalog/"""
        response = self.api_client.get('/api/catalog/')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn('IfcWall', data)
        self.assertEqual(data['IfcWall'][0]['global_id'], 'test123')
        self.assertEqual(data['IfcWall'][0]['name'], 'IfcWall')

    def test_missing_parameters(self):
        """Prueba que el endpoint extract-component devuelve 400 si faltan parámetros"""
        response = self.client.post(
            reverse('core:extract_component'),
            data={},
            content_type='application/json'
        )
        self.assertEqual(response.status_code, 400)