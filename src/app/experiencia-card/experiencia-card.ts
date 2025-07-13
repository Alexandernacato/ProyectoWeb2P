import { Component, Input } from '@angular/core';
import { Industria } from '../service/experiencia.service';
@Component({
  selector: 'app-experiencia-card',
  imports: [],
  templateUrl: './experiencia-card.html',
  styleUrl: './experiencia-card.css'
})
export class ExperienciaCard {
 @Input() industria!: Industria;
}
