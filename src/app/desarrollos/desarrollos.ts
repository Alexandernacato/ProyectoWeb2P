import { Component } from '@angular/core';
import { DesarrollosService } from '../service/desarrollos.service';
import { Desarrollocard } from '../desarrollocard/desarrollocard';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-desarrollos',
  imports: [Desarrollocard, NgFor],
  templateUrl: './desarrollos.html',
  styleUrl: './desarrollos.css'
})
export class Desarrollos {
 desarrollos: any[] = [];
  categorias = ['Todos', 'Web', 'Mobile'];
  categoriaSeleccionada = 'Todos';

  constructor(private ds: DesarrollosService) {
    this.desarrollos = this.ds.obtenerDesarrollos();
  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    if (categoria === 'Todos') {
      this.desarrollos = this.ds.obtenerDesarrollos();
    } else {
      this.desarrollos = this.ds.obtenerPorCategoria(categoria);
    }
  }
}
