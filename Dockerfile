# Stage 1: Build frontend
FROM node:18 as frontend-builder

WORKDIR /app/frontend

# Copy frontend package files
COPY ifc_reuse/frontend/package*.json ./

RUN npm install

COPY ifc_reuse/frontend/ ./

RUN npm run build


# Stage 2: Backend with full IfcOpenShell build
FROM python:3.11-slim as backend

# Install system dependencies required to build IfcOpenShell
RUN apt-get update && apt-get install -y \
    git \
    cmake \
    g++ \
    libopencascade-dev \
    libboost-all-dev \
    libtbb-dev \
    libeigen3-dev \
    libxml2-dev \
    libgl1-mesa-dev \
    libglu1-mesa-dev \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Clone and build IfcOpenShell
WORKDIR /src
RUN git clone https://github.com/IfcOpenShell/IfcOpenShell.git

WORKDIR /src/IfcOpenShell
RUN cmake -DBUILD_IFC_CONVERT=ON -DCMAKE_BUILD_TYPE=Release .
RUN make -j$(nproc)

# Install IfcOpenShell Python bindings
RUN pip install ./python

# Set correct path for IfcConvert binary
ENV IFCCONVERT_PATH=/src/IfcOpenShell/IfcConvert

# Application code
WORKDIR /app

# Copy backend code
COPY ifc_reuse/ ./ifc_reuse/

# Copy requirements file
COPY requirements.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy frontend build from first stage
COPY --from=frontend-builder /app/frontend/dist/ ./ifc_reuse/frontend/dist/

# Collect Django static files
WORKDIR /app/ifc_reuse
RUN python manage.py collectstatic --noinput

# Expose Django server port
EXPOSE 8000

# Start Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
