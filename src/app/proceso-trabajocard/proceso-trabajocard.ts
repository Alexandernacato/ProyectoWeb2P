import { Component,Input } from '@angular/core';
import { PasoTrabajo } from '../service/trabajo.service'; // Asegúrate de que esta interfaz esté definida en tu servicio
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-proceso-trabajocard',
  imports: [NgIf, CommonModule],
  templateUrl: './proceso-trabajocard.html',
  styleUrl: './proceso-trabajocard.css'
})
export class ProcesoTrabajocard {
  @Input() paso!: PasoTrabajo; // Usa la interfaz importada
  @Input() index!: number;
  @Input() totalPasos!: number;

  get isLast(): boolean {
    return this.index === this.totalPasos - 1;
  }
}
