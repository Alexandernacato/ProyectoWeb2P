// src/app/services/desarrollos.service.ts
import { Injectable } from '@angular/core';

export interface Desarrollo {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  tecnologias: string[];
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class DesarrollosService {
  private desarrollos: Desarrollo[] = [
    {
      id: 1,
      nombre: 'Sistema de Gestión Empresarial',
      imagen: 'assets/img/desarrollos/gestor-empresarial.jpg',
      descripcion: 'Plataforma integral para gestión de procesos empresariales con dashboard interactivo.',
      tecnologias: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
      categoria: 'Web'
    },
    {
      id: 2,
      nombre: 'App Móvil de Delivery',
      imagen: 'assets/img/desarrollos/app-delivery.jpg',
      descripcion: 'Aplicación móvil para servicio de delivery con seguimiento en tiempo real.',
      tecnologias: ['Flutter', 'Firebase', 'Google Maps API'],
      categoria: 'Mobile'
    },
    {
      id: 3,
      nombre: 'Plataforma E-learning',
      imagen: 'assets/img/desarrollos/e-learning.jpg',
      descripcion: 'Sistema de educación en línea con clases virtuales y evaluaciones automatizadas.',
      tecnologias: ['React', 'Django', 'PostgreSQL', 'WebRTC'],
      categoria: 'Web'
    },
    {
      id: 4,
      nombre: 'Sistema de Inventario Inteligente',
      imagen: 'assets/img/desarrollos/inventario.jpg',
      descripcion: 'Solución de gestión de inventario con predicción de stock y alertas automáticas.',
      tecnologias: ['Vue.js', 'Python', 'TensorFlow', 'SQL Server'],
      categoria: 'Web'
    }
  ];

  obtenerDesarrollos(): Desarrollo[] {
    return this.desarrollos;
  }

  obtenerPorCategoria(categoria: string): Desarrollo[] {
    return this.desarrollos.filter(dev => dev.categoria === categoria);
  }
}