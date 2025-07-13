import { Component } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { ExperienciaCard } from '../experiencia-card/experiencia-card';
import { CommonModule } from '@angular/common';
import { NuestrosDesarrolladores } from '../nuestros-desarrolladores/nuestros-desarrolladores';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-experiencia',
  imports: [ExperienciaCard, CommonModule, NuestrosDesarrolladores, Header, Footer],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
  industrias: any[];

  constructor(private experienciaService: ExperienciaService) {
    this.industrias = this.experienciaService.getIndustrias();
  }
}
