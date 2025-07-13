import { Component, Output, EventEmitter } from '@angular/core';
import { DesarrolladoresService, Desarrollador } from '../service/desarrolladores.service';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-desarrollador-card',
  imports: [],
  templateUrl: './desarrollador-card.html',
  styleUrl: './desarrollador-card.css'
})
export class DesarrolladorCard {
     @Input() desarrollador!: Desarrollador;
  @Output() verMas = new EventEmitter<number>();  // Emitirá el ID del desarrollador

  onVerMasClick() {
    this.verMas.emit(this.desarrollador.id);  // Emite el evento con el ID
  }
}
