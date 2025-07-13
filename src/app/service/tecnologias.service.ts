// src/app/services/tecnologias.service.ts
import { Injectable } from '@angular/core';

export interface Tecnologia {
  nombre: string;
  logo: string;
  dominio: number;
  categoria?: string;
}

@Injectable({ providedIn: 'root' })
export class TecnologiasService {
  private tecnologias: Tecnologia[] = [
    { nombre: 'Angular', logo: 'assets/angular.png', dominio: 95, categoria: 'frontend' },
    { nombre: 'React', logo: 'assets/react.png', dominio: 90, categoria: 'frontend' },
    { nombre: 'Flutter', logo: 'assets/descarga.png', dominio: 87, categoria: 'frontend' },
    { nombre: 'Node.js', logo: 'assets/node.png', dominio: 93, categoria: 'backend' },
    { nombre: 'Python', logo: 'assets/python.png', dominio: 88, categoria: 'backend' },
    { nombre: 'Django', logo: 'assets/django.png', dominio: 85, categoria: 'backend' },
    { nombre: 'TypeScript', logo: 'assets/typescript.png', dominio: 94, categoria: 'lenguaje' },
    { nombre: 'Docker', logo: 'assets/docker.png', dominio: 91, categoria: 'devops' },
    { nombre: 'Kubernetes', logo: 'assets/kubernetes.png', dominio: 84, categoria: 'devops' },
    { nombre: 'AWS', logo: 'assets/aws.png', dominio: 89, categoria: 'cloud' },
    { nombre: 'MongoDB', logo: 'assets/mongodc.png', dominio: 90, categoria: 'database' },
    { nombre: 'GraphQL', logo: 'assets/graph.png', dominio: 86, categoria: 'api' }
  ];

  obtenerTecnologias(): Tecnologia[] {
    return this.tecnologias;
  }

  obtenerPorCategoria(categoria: string): Tecnologia[] {
    return this.tecnologias.filter(tech => tech.categoria === categoria);
  }

  obtenerTopTecnologias(limite: number = 5): Tecnologia[] {
    return [...this.tecnologias]
      .sort((a, b) => b.dominio - a.dominio)
      .slice(0, limite);
  }
}