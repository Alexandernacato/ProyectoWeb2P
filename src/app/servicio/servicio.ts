import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serviciocard } from '../serviciocard/serviciocard';
import { ServiciosService } from '../service/servicio.service';
import { ProcesoTrabajo } from '../proceso-trabajo/proceso-trabajo';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
@Component({
  selector: 'app-servicio',
  imports: [Serviciocard, CommonModule, ProcesoTrabajo, Header, Footer],
  templateUrl: './servicio.html',
  styleUrl: './servicio.css'
})
export class Servicio {
   servicios: any[];

  constructor(private serviciosService: ServiciosService) {
    this.servicios = this.serviciosService.obtenerServicios();
  }
}
