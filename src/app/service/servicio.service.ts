import { Injectable, signal } from '@angular/core';

export interface Servicio {
  titulo: string;
  descripcion: string;
  bullets: string[];
  icono: string;
}

@Injectable({ providedIn: 'root' })
export class ServiciosService {
  // Convertimos el array estático en una Signal
  private serviciosSignal = signal<Servicio[]>([
    {
      titulo: 'Desarrollo Web',
      descripcion: 'Aplicaciones web modernas y responsivas utilizando las últimas tecnologías como React, Next.js, Node.js',
      bullets: ['Sitios web corporativos', 'Aplicaciones web complejas'],
      icono: 'assets/icons/web.svg',
    },
    {
      titulo: 'Desarrollo Mobile',
      descripcion: 'Apps nativas y multiplataforma para iOS y Android con experiencia de usuario excepcional y rendimiento optimizado.',
      bullets: ['Apps nativas iOS/Android', 'Integración con APIs'],
      icono: 'assets/icons/mobile.svg',
    },
    {
      titulo: 'Cloud & DevOps',
      descripcion: 'Infraestructura en la nube, automatización de despliegues y monitoreo continuo para máxima disponibilidad.',
      bullets: ['AWS / Azure / Google Cloud', 'CI/CD Pipelines', 'Monitoreo 24/7'],
      icono: 'assets/icons/devops.svg',
    },
    {
      titulo: 'Bases de Datos',
      descripcion: 'Diseño, implementación y optimización de bases de datos relacionales y NoSQL para máximo rendimiento.',
      bullets: ['PostgreSQL / MySQL', 'MongoDB / Redis', 'Optimización de consultas'],
      icono: 'assets/icons/database.svg',
    },
    {
      titulo: 'Ciberseguridad',
      descripcion: 'Protección integral de sistemas y datos con auditorías de seguridad y protocolos actualizados.',
      bullets: ['Auditorías de seguridad', 'Protección contra ataques'],
      icono: 'assets/icons/security.svg',
    },
    {
      titulo: 'Soporte Técnico',
      descripcion: 'Mantenimiento proactivo, soporte 24/7 y actualizaciones continuas para garantizar el funcionamiento óptimo.',
      bullets: ['Soporte 24/7/365', 'Mantenimiento preventivo', 'Actualizaciones automáticas'],
      icono: 'assets/icons/support.svg',
    },
  ]);

  // Mantenemos el método original pero ahora retorna la Signal
  obtenerServicios() {
    return this.serviciosSignal();
  }

  // Versión alternativa que retorna la Signal directamente (opcional)
  get servicios() {
    return this.serviciosSignal.asReadonly();
  }
}