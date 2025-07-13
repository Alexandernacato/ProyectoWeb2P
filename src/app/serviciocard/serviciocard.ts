import { Component, Input } from '@angular/core';
import { Servicio } from '../service/servicio.service'; // Assuming you have a model for Servicio
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-serviciocard',
  imports: [NgFor],
  templateUrl: './serviciocard.html',
  styleUrl: './serviciocard.css'
})
export class Serviciocard {
 @Input() servicio!: Servicio; 
}
