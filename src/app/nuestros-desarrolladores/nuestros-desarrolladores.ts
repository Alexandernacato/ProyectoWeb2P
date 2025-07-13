import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ DesarrolladoresService, Desarrollador } from '../service/desarrolladores.service';
import { DesarrolladorCard } from '../desarrollador-card/desarrollador-card';
import { DesarrolladorModal } from '../desarrollador-modal/desarrollador-modal';
@Component({
  selector: 'app-nuestros-desarrolladores',
  imports: [DesarrolladorCard, DesarrolladorModal, CommonModule],
  templateUrl: './nuestros-desarrolladores.html',
  styleUrl: './nuestros-desarrolladores.css'
})
export class NuestrosDesarrolladores {
 desarrolladores: Desarrollador[] = [];
  desarrolladorSeleccionado?: Desarrollador;
  modalVisible = false;

  constructor(private service: DesarrolladoresService) {
    this.desarrolladores = service.getDesarrolladores();
  }

  abrirModal(id: number) {
  const dev = this.desarrolladores.find(d => d.id === id);
  if (dev) {
    this.desarrolladorSeleccionado = dev;
    this.modalVisible = true;
  }
}
  cerrarModal() {
    this.modalVisible = false;
  }
}
