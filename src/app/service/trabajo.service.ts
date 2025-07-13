// proceso-trabajo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';

export interface PasoTrabajo {
  titulo: string;
  descripcion: string;
  icono: string;
}

@Injectable({ providedIn: 'root' })
export class ProcesoTrabajoService {
  private pasos: PasoTrabajo[] = [
    {
      titulo: '1. Análisis',
      descripcion: 'Entendemos tu necesidad y los objetivos del proyecto.',
      icono: 'assets/analisis.png'
    },
    {
      titulo: '2. Planificación',
      descripcion: 'Diseñamos una solución tecnológica a medida.',
      icono: 'assets/planificacion.png'
    },
    {
      titulo: '3. Desarrollo',
      descripcion: 'Codificamos y construimos el producto con tecnologías de punta.',
      icono: 'assets/desarrolo.png'
    },
    {
      titulo: '4. Entrega',
      descripcion: 'Implementamos la solución y aseguramos su funcionamiento óptimo.',
      icono: 'assets/entrega.png'
    }
  ];

  obtenerPasos(): PasoTrabajo[] {
    return this.pasos;
  }
}
