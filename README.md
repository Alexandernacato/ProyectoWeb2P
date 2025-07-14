# 🚀 DevSoft - Plataforma de Desarrollo Profesional  
**Angular • TypeScript • SCSS**  

<div align="center">
  <img src="https://img.shields.io/badge/Angular-19-DD0031?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/SCSS-3.0-CC6699?logo=sass" alt="SCSS">
</div>

## 📋 Descripción  
DevSoft es una plataforma corporativa que muestra nuestros servicios de desarrollo de software y equipo técnico especializado. Desarrollado con Angular 19 utilizando componentes standalone.

## 🏗️ Estructura del Proyecto (Exacta)
```bash
src/app/
├── contacto/               # Página de contacto
├── desarrollador-card/     # Componente de tarjeta
├── desarrollador-modal/    # Modal de perfil
├── desarrollos/            # Proyectos destacados
├── experiencia/            # Sección experiencia
├── experiencia-card/       # Cards de experiencia
├── footer/                 # Componente footer
├── header/                 # Componente header
├── hero/                   # Sección hero
├── home/                   # Página principal
├── nuestros-desarrolladores/ # Equipo completo
├── proceso-trabajo/        # Metodología
├── proceso-trabajocard/    # Cards de proceso
├── quienes-somos/          # Sobre nosotros
├── service/                # Servicios API
├── servicio/               # Página servicios
├── serviciocard/           # Cards de servicio
├── tecnologias/            # Stack tecnológico
├── testimonio/             # Testimonios
└── testimoniocard/         # Cards de testimonio
### Instrucciones para ejecutar la imagen Docker

```bash
# Iniciar sesión en Docker Hub (si no estás logueado)
docker login
# Usuario: alexander553
# Ingresa tu contraseña de Docker Hub cuando se solicite

# Descargar la imagen desde Docker Hub
docker pull alexander553/empresa-angular:latest

# Ejecutar el contenedor Docker en el puerto 80
docker run -d -p 80:80 --name empresa-web alexander553/empresa-angular:latest

# Si el puerto 80 está ocupado, usa otro puerto, por ejemplo 8080
docker run -d -p 8080:80 --name empresa-web alexander553/empresa-angular:latest

# Acceder a la aplicación en el navegador:
# http://localhost
# o http://localhost:8080 si usaste otro puerto

# Detener el contenedor
docker stop empresa-web

# Eliminar el contenedor
docker rm empresa-web
```