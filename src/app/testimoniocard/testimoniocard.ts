import { Component, Input } from '@angular/core';
import { Testimonio } from '../service/testimonio.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-testimoniocard',
  imports: [NgFor],
  templateUrl: './testimoniocard.html',
  styleUrl: './testimoniocard.css'
})
export class Testimoniocard {
  @Input() testimonio!: Testimonio;
  
  get estrellas(): boolean[] {
    return Array(5).fill(false).map((_, i) => i < this.testimonio.calificacion);
  }
}
