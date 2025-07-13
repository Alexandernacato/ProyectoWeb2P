import { Injectable } from '@angular/core';

export interface Icono {
  path: string;
  viewBox?: string;
}

export interface Industria {
  titulo: string;
  descripcion: string;
  proyectos: string;
  icono: Icono;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private industrias: Industria[] = [
    { 
      titulo: 'Fintech',
      descripcion: 'Soluciones de pagos digitales y blockchain',
      proyectos: '15+ proyectos completados',
      icono: {
        path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
        viewBox: '0 0 24 24'
      }
    },
    { 
      titulo: 'E-commerce',
      descripcion: 'Plataformas de ventas online y gestión de inventarios',
      proyectos: '20+ proyectos completados',
      icono: {
        path: 'M21.9 8.9l-1.7-1.7-10.1 10-4.3-4.3-1.7 1.7 6 6 11.8-11.7zM12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10zm0-18c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z',
        viewBox: '0 0 24 24'
      }
    },
    { 
      titulo: 'EdTech',
      descripcion: 'Plataformas educativas y sistemas de aprendizaje',
      proyectos: '10+ proyectos completados',
      icono: {
        path: 'M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z',
        viewBox: '0 0 24 24'
      }
    },
    { 
      titulo: 'Salud',
      descripcion: 'Sistemas médicos y soluciones de telemedicina',
      proyectos: '8+ proyectos completados',
      icono: {
        path: 'M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z',
        viewBox: '0 0 24 24'
      }
    },
    { 
      titulo: 'Logística',
      descripcion: 'Gestión de cadenas de suministro y transporte',
      proyectos: '12+ proyectos completados',
      icono: {
        path: 'M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h-4V5.5zm9 11.5H5V9h14v8z',
        viewBox: '0 0 24 24'
      }
    },
    { 
      titulo: 'Manufactura',
      descripcion: 'Sistemas de gestión de producción industrial',
      proyectos: '6+ proyectos completados',
      icono: {
        path: 'M19.14 7.5c.4.29.86 1.35.86 1.5 0 .15-.46 1.21-.86 1.5l-3.37 2.08c-.36.22-.77.22-1.13 0L11.86 10.5c-.4-.29-.86-1.35-.86-1.5 0-.15.46-1.21.86-1.5l3.37-2.08c.36-.22.77-.22 1.13 0l3.37 2.08zm-6.57 4.09c.4.29.86 1.35.86 1.5 0 .15-.46 1.21-.86 1.5l-3.37 2.08c-.36.22-.77.22-1.13 0L5.86 13.09c-.4-.29-.86-1.35-.86-1.5 0-.15.46-1.21.86-1.5l3.37-2.08c.36-.22.77-.22 1.13 0l3.37 2.08c.4.29.86 1.35.86 1.5 0 .15-.46 1.21-.86 1.5z',
        viewBox: '0 0 24 24'
      }
    }
  ];

  getIndustrias(): Industria[] {
    return this.industrias;
  }
}