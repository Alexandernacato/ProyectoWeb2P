import { Component, Input } from '@angular/core';
import { Desarrollo } from '../service/desarrollos.service'; // Assuming you have a model for Desarrollo
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-desarrollocard',
  imports: [NgFor],
  templateUrl: './desarrollocard.html',
  styleUrl: './desarrollocard.css'
})
export class Desarrollocard {
   @Input() desarrollo!: Desarrollo;
}
