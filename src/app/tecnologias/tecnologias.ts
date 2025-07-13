import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnologiasService, Tecnologia } from '../service/tecnologias.service';
@Component({
  selector: 'app-tecnologias',
  imports: [CommonModule],
  templateUrl: './tecnologias.html',
  styleUrl: './tecnologias.css'
})
export class Tecnologias {
  tecnologias: any[] = [];
  currentIndex = 0;
  visibleCards = 4;
  private animationInterval: any;
  private isPaused = false;

  constructor(private tecService: TecnologiasService) {
    this.tecnologias = this.tecService.obtenerTecnologias();
    this.startAutoAnimation();
  }

  startAutoAnimation(): void {
    this.animationInterval = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, 2500); // Velocidad de desplazamiento (2.5 segundos)
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % (this.tecnologias.length - this.visibleCards + 1);
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.tecnologias.length) % (this.tecnologias.length - this.visibleCards + 1);
  }

  getVisibleTechnologies(): any[] {
    return this.tecnologias.slice(this.currentIndex, this.currentIndex + this.visibleCards);
  }

  getDotsArray(): number[] {
    return Array(Math.max(0, this.tecnologias.length - this.visibleCards + 1)).fill(0);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  pauseCarousel(): void {
    this.isPaused = true;
  }

  resumeCarousel(): void {
    this.isPaused = false;
  }
}
