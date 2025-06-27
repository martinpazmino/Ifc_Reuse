FROM python:3.11-slim

# 1️⃣ Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    libgl1 \
    libglu1-mesa \
    libhdf5-dev \
    nodejs \
    npm \
    unzip \
    && apt-get clean

# 2️⃣ Crear directorio de trabajo
WORKDIR /app

# 3️⃣ Copiar todo el proyecto
COPY . .

# 4️⃣ Instalar IfcOpenShell desde el .whl
COPY ifcopenshell-0.8.3a250625-py311-none-manylinux_2_31_x86_64.whl /tmp/
RUN pip install /tmp/ifcopenshell-*.whl

# 5️⃣ Instalar otros requisitos de Python
RUN pip install -r requirements.txt

# 6️⃣ Instalar y construir el frontend con Vite
WORKDIR /app/ifc_reuse/frontend
RUN npm install
RUN npm run build

# 7️⃣ Mover frontend generado a carpeta static de Django
RUN cp -r dist/* /app/ifc_reuse/static/

# 8️⃣ Registrar IfcConvert como binario ejecutable
COPY tools/IfcConvert /usr/local/bin/IfcConvert
RUN chmod +x /usr/local/bin/IfcConvert

# 9️⃣ Volver al backend
WORKDIR /app

# 🔟 Exponer puerto
EXPOSE 8080

# 🚀 Iniciar Django
CMD ["python", "ifc_reuse/manage.py", "runserver", "0.0.0.0:8080"]
