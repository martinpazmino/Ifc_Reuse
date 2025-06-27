FROM python:3.11-slim

# 🔧 Instalar dependencias del sistema necesarias
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglu1-mesa \
    libhdf5-dev \
    && apt-get clean

# 🏗️ Establecer directorio de trabajo
WORKDIR /app

# 📦 Copiar todos los archivos del proyecto
COPY . .

# 🧠 Instalar IfcOpenShell desde archivo .whl
COPY ifcopenshell-0.8.3a250625-py311-none-manylinux_2_31_x86_64.whl /tmp/
RUN pip install /tmp/ifcopenshell-*.whl

# 🐍 Instalar dependencias Python del backend
RUN pip install --no-cache-dir -r requirements.txt

# ✅ Copiar IfcConvert (el binario Linux) al path global
COPY tools/IfcConvert /usr/local/bin/IfcConvert
RUN chmod +x /usr/local/bin/IfcConvert

# 📂 Exponer puerto para Django
EXPOSE 8080

# 🚀 Comando para ejecutar el servidor Django
CMD ["python", "ifc_reuse/manage.py", "runserver", "0.0.0.0:8080"]
