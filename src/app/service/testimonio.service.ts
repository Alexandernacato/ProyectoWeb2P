// src/app/services/testimonio.service.ts
import { Injectable } from '@angular/core';

export interface Testimonio {
  id: number;
  nombre: string;
  cargo: string;
  empresa: string;
  comentario: string;
  calificacion: number; // 1-5
}

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {
  private testimonios: Testimonio[] = [
    {
      id: 1,
      nombre: 'María González',
      cargo: 'Directora de Marketing',
      empresa: 'TechSolutions Inc.',
      comentario: 'El software desarrollado superó nuestras expectativas. Hemos aumentado nuestra productividad en un 40%.',
      calificacion: 5
    },
    {
      id: 2,
      nombre: 'Carlos Mendoza',
      cargo: 'CEO',
      empresa: 'Innovatech',
      comentario: 'Excelente atención al cliente y un producto final robusto y escalable.',
      calificacion: 4
    },
    {
      id: 3,
      nombre: 'Ana López',
      cargo: 'Gerente de TI',
      empresa: 'Global Corp',
      comentario: 'El equipo demostró gran profesionalismo y cumplió con todos los plazos establecidos.',
      calificacion: 5
    }
  ];

  obtenerTestimonios(): Testimonio[] {
    return this.testimonios;
  }
}