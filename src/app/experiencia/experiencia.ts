import { Component } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { ExperienciaCard } from '../experiencia-card/experiencia-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experiencia',
  imports: [ExperienciaCard, CommonModule],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
  industrias: any[];

  constructor(private experienciaService: ExperienciaService) {
    this.industrias = this.experienciaService.getIndustrias();
  }
}
