import { Component , EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { DesarrolladoresService, Desarrollador } from '../service/desarrolladores.service'; 
@Component({
  selector: 'app-desarrollador-modal',
  imports: [CommonModule],
  templateUrl: './desarrollador-modal.html',
  styleUrl: './desarrollador-modal.css'
})
export class DesarrolladorModal {
  @Input() desarrollador?: Desarrollador;
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  cerrar() {
    this.close.emit();
  }
}
