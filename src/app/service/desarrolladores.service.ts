import { Injectable } from '@angular/core';

export interface Desarrollador {
  id: number;
  nombre: string;
  cargo: string;
  especialidad: string;
  descripcion: string;
  foto: string; // Ahora será la ruta relativa desde assets
  habilidades: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DesarrolladoresService {
  private basePath = 'assets/images/desarrolladores/'; // Ruta base en assets

  private desarrolladores: Desarrollador[] = [
    {
      id: 1,
      nombre: 'María González',
      cargo: 'Frontend Lead',
      especialidad: 'React/Angular',
      descripcion: 'Especialista en interfaces de usuario con 8 años de experiencia liderando equipos frontend.',
      foto: `${this.basePath}maria-gonzalez.jpg`,
      habilidades: ['React', 'TypeScript', 'UX/UI', 'Jest']
    },
    {
      id: 2,
      nombre: 'Carlos Rojas',
      cargo: 'Backend Architect',
      especialidad: 'Node.js/Python',
      descripcion: 'Arquitecto de soluciones escalables con experiencia en sistemas distribuidos y microservicios.',
      foto: `${this.basePath}carlos-rojas.jpg`,
      habilidades: ['Node.js', 'Python', 'AWS', 'Docker']
    },
    {
      id: 3,
      nombre: 'Ana Morales',
      cargo: 'Mobile Engineer',
      especialidad: 'Flutter/React Native',
      descripcion: 'Desarrolladora móvil con experiencia en apps para millones de usuarios en ambas plataformas.',
      foto: `${this.basePath}ana-morales.jpg`,
      habilidades: ['Flutter', 'React Native', 'Firebase', 'CI/CD']
    }
  ];

  getDesarrolladores(): Desarrollador[] {
    return this.desarrolladores;
  }

  getDesarrollador(id: number): Desarrollador | undefined {
    return this.desarrolladores.find(d => d.id === id);
  }
}