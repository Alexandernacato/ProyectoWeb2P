import { Component } from '@angular/core';
import { TestimonioService } from '../service/testimonio.service';
import { Testimoniocard } from '../testimoniocard/testimoniocard';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-testimonio',
  imports: [Testimoniocard, NgFor, CommonModule],
  templateUrl: './testimonio.html',
  styleUrl: './testimonio.css'
})
export class Testimonio {
   testimonios: any[] = [];

  constructor(private testimonioService: TestimonioService) {
    this.testimonios = this.testimonioService.obtenerTestimonios();
  }
}
