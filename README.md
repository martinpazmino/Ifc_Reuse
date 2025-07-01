# IFC Reuse Platform

This repository contains version 1 of **IFC Reuse**, a web application for managing reusable components extracted from Industry Foundation Classes (IFC) models.

The project is built with Django and provides a modern frontend using Vite and Three.js. Users can upload IFC files, extract single elements as fragments, browse a catalog of components and generate PDF passports for each item.

## Features

- Upload IFC models and automatically extract metadata such as project name and location.
- View and search a catalog of reusable components grouped by type.
- Generate OBJ fragments and thumbnails for visualisation.
- Create PDF "component passports" containing technical data and QR codes.
- User authentication with profiles, favorites and comments.
- Modern 3D viewer powered by [thatOpen](https://github.com/thatopen) components and WebIFC.

## Installation

1. Install Python (3.11 recommended) and Node.js.
2. Install Python dependencies:
   ```bash
   pip install -r ifc_reuse/requirements.txt
   ```
3. Build the frontend assets:
   ```bash
   cd ifc_reuse/frontend
   npm install
   npm run build
   cd ../..
   ```
4. Apply migrations and create a superuser:
   ```bash
   python ifc_reuse/manage.py migrate
   python ifc_reuse/manage.py createsuperuser
   ```
5. Start the development server:
   ```bash
   python ifc_reuse/manage.py runserver
   ```
6. Open `http://127.0.0.1:8000/` in your browser.

The path to the `IfcConvert` binary used for fragment generation can be configured via the `IFCCONVERT_PATH` setting in `ifc_reuse/ifc_reuse/settings.py`.

## Repository structure

- `ifc_reuse/` – Django project and app code
- `ifc_reuse/frontend/` – Vite based frontend for the viewer
- `tests/` – simple test files
- `*.markdown` – additional documentation (in German)



## License

This project is licensed under the [MIT License](./LICENSE).  
(c) 2025 IFC Reuse Platform
