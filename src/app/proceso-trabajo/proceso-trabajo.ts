import { Component } from '@angular/core';
import { ProcesoTrabajocard } from '../proceso-trabajocard/proceso-trabajocard';
import { CommonModule } from '@angular/common';
import { ProcesoTrabajoService,PasoTrabajo } from '../service/trabajo.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-proceso-trabajo',
  imports: [ProcesoTrabajocard, CommonModule, RouterModule],
  templateUrl: './proceso-trabajo.html',
  styleUrl: './proceso-trabajo.css'
})
export class ProcesoTrabajo {
   pasos: PasoTrabajo[]; 

  constructor(private procesoTrabajoService: ProcesoTrabajoService) {
    this.pasos = this.procesoTrabajoService.obtenerPasos();
  }
}
