import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Servicio } from './servicio/servicio';
import { Contacto } from './contacto/contacto';
import { Experiencia } from './experiencia/experiencia';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'servicio', component: Servicio },
  {path: 'experiencia', component: Experiencia},
  {path: 'contacto', component: Contacto},
  { path: '**', redirectTo: '' } 
];
