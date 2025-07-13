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
    { nombre: 'Angular', logo: 'assets/img/logos-tecnologias/angular.png', dominio: 95, categoria: 'frontend' },
    { nombre: 'React', logo: 'assets/img/logos-tecnologias/react.png', dominio: 90, categoria: 'frontend' },
    { nombre: 'Flutter', logo: 'assets/img/logos-tecnologias/flutter.png', dominio: 87, categoria: 'frontend' },
    { nombre: 'Node.js', logo: 'assets/img/logos-tecnologias/nodejs.png', dominio: 93, categoria: 'backend' },
    { nombre: 'Python', logo: 'assets/img/logos-tecnologias/python.png', dominio: 88, categoria: 'backend' },
    { nombre: 'Django', logo: 'assets/img/logos-tecnologias/django.png', dominio: 85, categoria: 'backend' },
    { nombre: 'TypeScript', logo: 'assets/img/logos-tecnologias/typescript.png', dominio: 94, categoria: 'lenguaje' },
    { nombre: 'Docker', logo: 'assets/img/logos-tecnologias/docker.png', dominio: 91, categoria: 'devops' },
    { nombre: 'Kubernetes', logo: 'assets/img/logos-tecnologias/kubernetes.png', dominio: 84, categoria: 'devops' },
    { nombre: 'AWS', logo: 'assets/img/logos-tecnologias/aws.png', dominio: 89, categoria: 'cloud' },
    { nombre: 'MongoDB', logo: 'assets/img/logos-tecnologias/mongodb.png', dominio: 90, categoria: 'database' },
    { nombre: 'GraphQL', logo: 'assets/img/logos-tecnologias/graphql.png', dominio: 86, categoria: 'api' }
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