# Integration von Tests für das IFC-Filter-System mit GitHub Actions

Um Tests für den beschriebenen Django-Code des IFC-Filter-Systems zu erstellen und diese mit GitHub Actions automatisch auszuführen, müssen wir Unit- und Integrationstests mit dem Django-Test-Framework schreiben und eine GitHub Actions Workflow-Datei konfigurieren. Im Folgenden erkläre ich Schritt für Schritt, wie Sie Tests für das System erstellen, diese in Ihr GitHub-Repository integrieren und automatisierte Tests mit GitHub Actions einrichten, basierend auf dem IFC-Filter-System. Die Lösung ist an die Anforderungen des Systems angepasst und verwendet Best Practices.

---

## 1. Tests für den Django-Code schreiben

Das IFC-Filter-System besteht aus Modellen (`MainCategory`, `SubCategory`, `Component`), Views (`upload_ifc`, API-Endpunkte wie `main_categories`, `sub_categories`, etc.) und Serializern. Wir schreiben Tests, um sicherzustellen, dass die Modelle korrekt funktionieren, die API-Endpunkte die erwarteten Daten liefern und die IFC-Verarbeitung wie vorgesehen funktioniert. Wir verwenden das Django-Test-Framework, da es gut für Unit- und Integrationstests geeignet ist und keine zusätzlichen Abhängigkeiten erfordert.

### Teststruktur

Erstellen Sie eine `tests`-App in Ihrem Django-Projekt, um die Tests zu organisieren. Alternativ können Sie Tests direkt in `core/tests.py` schreiben.

**Befehl zum Erstellen der Tests-App**:
```bash
python manage.py startapp tests
```

Fügen Sie `'tests'` zu `INSTALLED_APPS` in `core/settings.py` hinzu:
```python
INSTALLED_APPS = [
    ...
    'core',
    'tests',
]
```

### Beispieltests

Die Tests decken folgende Bereiche ab:
- **Modelle**: Überprüfen, ob `MainCategory`, `SubCategory` und `Component` korrekt erstellt und gespeichert werden.
- **Views**: Testen des `upload_ifc`-Endpunkts und der API-Endpunkte (`main_categories`, `sub_categories`, `properties`, `property_values`, `components`).
- **IFC-Verarbeitung**: Simulieren des Hochladens einer IFC-Datei mit `ifcopenshell`.

**Erstellen Sie `core/tests.py` (oder `tests/tests.py`)**:
```python
from django.test import TestCase, Client
from rest_framework.test import APIClient
from core.models import MainCategory, SubCategory, Component
from django.core.files.uploadedfile import SimpleUploadedFile
import ifcopenshell
import io
import json
from django.urls import reverse

class IFCTestCase(TestCase):
    def setUp(self):
        # Testdaten für Kategorien erstellen
        self.main_category = MainCategory.objects.create(
            id='ausbauelemente', name='Ausbauelemente'
        )
        self.sub_category = SubCategory.objects.create(
            id='wande', name='Wände', main_category=self.main_category,
            ifc_types=['IfcWall']
        )
        # Testkomponente erstellen
        self.component = Component.objects.create(
            id='12345',
            name='Testwand',
            main_category=self.main_category,
            sub_category=self.sub_category,
            properties={
                'material': 'Holz',
                'abmessungen': '1200x2000mm',
                'storey': 'EG',
                'zustand_schadensfreiheit': 'Gebraucht'
            },
            fragment_id='frag123',
            model_uuid='model456'
        )
        self.client = APIClient()

    def test_main_category_creation(self):
        """Testet die Erstellung einer Hauptkategorie"""
        self.assertEqual(self.main_category.name, 'Ausbauelemente')
        self.assertEqual(str(self.main_category), 'Ausbauelemente')

    def test_sub_category_creation(self):
        """Testet die Erstellung einer Unterkategorie"""
        self.assertEqual(self.sub_category.name, 'Wände')
        self.assertEqual(self.sub_category.main_category, self.main_category)
        self.assertEqual(self.sub_category.ifc_types, ['IfcWall'])

    def test_component_creation(self):
        """Testet die Erstellung einer Komponente"""
        self.assertEqual(self.component.name, 'Testwand')
        self.assertEqual(self.component.properties['material'], 'Holz')
        self.assertEqual(self.component.fragment_id, 'frag123')

    def test_main_categories_api(self):
        """Testet den main_categories API-Endpunkt"""
        response = self.client.get('/api/main-categories')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['id'], 'ausbauelemente')

    def test_sub_categories_api(self):
        """Testet den sub_categories API-Endpunkt"""
        response = self.client.get('/api/sub-categories?main_category=ausbauelemente')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['id'], 'wande')

    def test_properties_api(self):
        """Testet den properties API-Endpunkt"""
        response = self.client.get(
            '/api/properties?main_category=ausbauelemente&sub_category=wande'
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        expected_properties = ['abmessungen', 'material', 'storey', 'zustand_schadensfreiheit']
        self.assertEqual([prop['id'] for prop in data], expected_properties)

    def test_property_values_api(self):
        """Testet den property_values API-Endpunkt"""
        response = self.client.get(
            '/api/property-values?main_category=ausbauelemente&sub_category=wande&property=material'
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data, ['Holz'])

    def test_components_api(self):
        """Testet den components API-Endpunkt"""
        response = self.client.get(
            '/api/components?main_category=ausbauelemente&sub_category=wande&property=material&value=Holz'
        )
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Testwand')

    def test_upload_ifc(self):
        """Testet den upload_ifc Endpunkt"""
        # Erstellen einer einfachen IFC-Datei für Testzwecke
        ifc_file = ifcopenshell.file()
        wall = ifc_file.create_entity('IfcWall', Name='Testwand')
        wall.ObjectType = 'Holz'
        wall.GlobalId = 'test123'
        # IFC-Datei in Bytes speichern
        buffer = io.BytesIO()
        ifc_file.write(buffer)
        buffer.seek(0)
        uploaded_file = SimpleUploadedFile('test.ifc', buffer.read(), content_type='application/octet-stream')

        response = self.client.post('/api/upload-ifc', {'ifc_file': uploaded_file}, format='multipart')
        self.assertEqual(response.status_code, 201)
        # Überprüfen, ob die Komponente erstellt wurde
        component = Component.objects.get(id=str(wall.id()))
        self.assertEqual(component.name, 'Testwand')
        self.assertEqual(component.properties['material'], 'Holz')
```

**Erklärungen**:
- **setUp**: Erstellt Testdaten (Kategorien, Komponente) vor jedem Test.
- **Model-Tests**: Überprüfen die korrekte Erstellung und Speicherung von `MainCategory`, `SubCategory` und `Component`.
- **API-Tests**: Testen die API-Endpunkte mit `APIClient`, um sicherzustellen, dass sie die erwarteten Antworten liefern.
- **IFC-Upload-Test**: Simuliert das Hochladen einer IFC-Datei mit `ifcopenshell`, um die Verarbeitung zu testen.

**Testausführung lokal**:
```bash
python manage.py test core
```

---

## 2. GitHub Actions Workflow einrichten

GitHub Actions ermöglicht es, Tests automatisch bei jedem Push oder Pull-Request auszuführen. Wir erstellen eine Workflow-Datei, die eine Python-Umgebung einrichtet, Abhängigkeiten installiert und die Tests ausführt. Die Konfiguration verwendet SQLite für Einfachheit, kann aber für PostgreSQL erweitert werden.

### Workflow-Datei erstellen

Erstellen Sie die Datei `.github/workflows/django-ci.yml` in Ihrem Repository:

```yaml
name: Django CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.8, 3.9, 3.10]  # Testen mit mehreren Python-Versionen

    steps:
    - uses: actions/checkout@v4  # Repository auschecken
      name: Checkout code

    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v5
      with:
        python-version: ${{ matrix.python-version }}

    - name: Install Dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install ifcopenshell  # Für IFC-Verarbeitung

    - name: Run Tests
      run: |
        python manage.py test
      env:
        DJANGO_SETTINGS_MODULE: core.settings  # Pfad zu settings.py
```

**Erklärungen**:
- **Trigger**: Der Workflow läuft bei Pushes oder Pull-Requests auf `main` oder `develop` (anpassbar).
- **Matrix**: Testet mit Python-Versionen 3.8, 3.9 und 3.10, um Kompatibilität sicherzustellen.
- **Schritte**:
  - Checkt das Repository aus (`actions/checkout@v4`).
  - Richtet Python ein (`actions/setup-python@v5`).
  - Installiert Abhängigkeiten aus `requirements.txt` und `ifcopenshell`.
  - Führt Tests mit `python manage.py test` aus.
- **Umgebungsvariablen**: Setzt `DJANGO_SETTINGS_MODULE`, um die Django-Einstellungen zu finden.

### Voraussetzungen

- **requirements.txt**: Stellen Sie sicher, dass alle Abhängigkeiten in `requirements.txt` aufgelistet sind:
  ```bash
  pip freeze > requirements.txt
  ```
  Beispiel `requirements.txt`:
  ```
  Django==5.0.2
  djangorestframework==3.15.1
  jsonfield==3.1.0
  ifcopenshell==0.7.0
  ```

- **Repository**: Pushen Sie den Code (inkl. Tests und Workflow-Datei) in Ihr GitHub-Repository:
  ```bash
  git add .
  git commit -m "Tests und GitHub Actions CI-Workflow hinzufügen"
  git push origin main
  ```

---

## 3. Testabdeckung hinzufügen (optional)

Um die Testabdeckung zu messen, können Sie `coverage.py` verwenden.

**Installation**:
```bash
pip install coverage
```

**Anpassen der Workflow-Datei**:
Aktualisieren Sie `.github/workflows/django-ci.yml`, um die Abdeckung zu messen und an Coveralls zu senden (optional):

```yaml
name: Django CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [3.8, 3.9, 3.10]

    steps:
    - uses: actions/checkout@v4
      name: Checkout code

    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v5
      with:
        python-version: ${{ matrix.python-version }}

    - name: Install Dependencies
      run: |
        python -m pip install --upgrade pip
        pip install -r requirements.txt
        pip install ifcopenshell coverage coveralls

    - name: Run Tests with Coverage
      run: |
        coverage run --source=core manage.py test
        coverage report
      env:
        DJANGO_SETTINGS_MODULE: core.settings

    - name: Upload Coverage to Coveralls
      if: matrix.python-version == '3.10'  # Nur für eine Version, um Duplikate zu vermeiden
      run: coveralls
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

**Coveralls einrichten**:
1. Melden Sie sich bei [Coveralls.io](https://coveralls.io) mit Ihrem GitHub-Konto an.
2. Aktivieren Sie Ihr Repository.
3. Der `GITHUB_TOKEN` wird automatisch von GitHub Actions bereitgestellt.

**Lokale Abdeckung testen**:
```bash
coverage run --source=core manage.py test
coverage report
```

---

## 4. Branch-Schutzregeln einrichten

Um die Qualität zu sichern, richten Sie Branch-Schutzregeln für `main` und `develop` ein:
1. Gehen Sie in Ihrem GitHub-Repository zu **Einstellungen > Branches**.
2. Klicken Sie unter „Branch-Schutzregeln“ auf **Regel hinzufügen**.
3. Konfigurieren Sie:
   - **Branch-Name-Muster**: `main` (oder `develop`).
   - **Pull-Request-Reviews erforderlich vor Merge**: Aktivieren.
   - **Statusprüfungen erforderlich vor Merge**: Aktivieren, wählen Sie „Django CI“.
4. Speichern Sie die Regel.

Dies stellt sicher, dass kein Code ohne bestandene Tests und Pull-Request-Review gemerged wird.

---

## 5. Überprüfen der GitHub Actions

Nach dem Pushen des Codes:
1. Gehen Sie in Ihrem Repository zu **Actions**.
2. Wählen Sie den „Django CI“-Workflow aus.
3. Überprüfen Sie die Logs, um sicherzustellen, dass die Tests erfolgreich laufen.
4. Bei Fehlern analysieren Sie die Logs und passen Tests oder Code an.

---

## 6. Erweiterungen und Best Practices

- **Datenbank**: Wenn Sie PostgreSQL statt SQLite verwenden möchten, fügen Sie einen Service-Container in der Workflow-Datei hinzu:
  ```yaml
  services:
    postgres:
      image: postgres:13
      env:
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: hunter2
        POSTGRES_DB: test_db
      ports:
        - 5432:5432
      options: >-
        --health-cmd pg_isready
        --health-interval 10s
        --health-timeout 5s
        --health-retries 5
  ```
  Passen Sie `settings.py` an, um die Testdatenbank zu verwenden:
  ```python
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': 'test_db',
          'USER': 'postgres',
          'PASSWORD': 'hunter2',
          'HOST': '127.0.0.1',
          'PORT': '5432',
      }
  }
  ```

- **Linting**: Fügen Sie Flake8 hinzu, um Code-Qualität zu prüfen:
  ```bash
  pip install flake8
  ```
  Erweitern Sie den Workflow:
  ```yaml
  - name: Run Linting
    run: flake8 core
  ```

- **Testumfang**: Erweitern Sie die Tests um:
  - Edge-Cases (z. B. ungültige IFC-Dateien).
  - Integrationstests für WebSocket-Updates (falls Channels verwendet wird).
  - Performance-Tests für große IFC-Dateien mit `django.test.LiveServerTestCase`.

- **Caching**: Nutzen Sie Caching für Abhängigkeiten, um die Build-Zeit zu verkürzen:
  ```yaml
  - name: Cache pip
    uses: actions/cache@v3
    with:
      path: ~/.cache/pip
      key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
      restore-keys: |
        ${{ runner.os }}-pip-
  ```

---

## 7. Zusammenfassung

- **Tests**: Geschrieben für Modelle, API-Endpunkte und IFC-Upload mit Django-Test-Framework.
- **GitHub Actions**: Workflow-Datei `.github/workflows/django-ci.yml` erstellt, die Tests mit mehreren Python-Versionen ausführt.
- **Abdeckung**: Optional mit `coverage.py` und Coveralls integriert.
- **Schutzregeln**: Branch-Schutz für `main` und `develop`, um Qualität zu sichern.
- **Erweiterungen**: Unterstützung für PostgreSQL, Linting und Caching möglich.

Pushen Sie den Code in Ihr GitHub-Repository, und die Tests laufen automatisch bei jedem Commit oder Pull-Request. Wenn Sie Hilfe bei spezifischen Testfällen, PostgreSQL-Integration oder Fehlerbehebung benötigen, lassen Sie es mich wissen!