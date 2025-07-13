import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Footer } from '../footer/footer';
import { QuienesSomos } from '../quienes-somos/quienes-somos';
import { Tecnologias } from '../tecnologias/tecnologias';
import { Desarrollos } from '../desarrollos/desarrollos';
import { Testimonio } from '../testimonio/testimonio';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [Header, Hero, Footer, QuienesSomos, Tecnologias, Desarrollos, Testimonio],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
