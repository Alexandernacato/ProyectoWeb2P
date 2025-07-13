import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';  
@Component({
  selector: 'app-contacto',
    standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Header, Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  // Signals para manejar el estado
  formularioEnviado = signal(false);
  enviandoFormulario = signal(false);
  mostrarMensajeExito = signal(false);

  formulario: FormGroup;

  contactoInfo = [
    {
      titulo: 'Teléfono',
      detalle: '+34 123456789\nLun - Vie: 09:00 - 18:00',
      icono: 'assets/icons/telefono.svg'
    },
    {
      titulo: 'Email',
      detalle: 'info@devsoft.com\nproyectos@devsoft.co',
      icono: 'assets/icons/email.svg'
    },
    {
      titulo: 'Oficina',
      detalle: 'Calle Serrano 123\n28001 Madrid, España',
      icono: 'assets/icons/oficina.svg'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      empresa: [''],
      telefono: ['', Validators.pattern('[0-9]{9}')],
      tipoProyecto: ['', Validators.required],
      presupuesto: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      aceptoPolitica: [false, Validators.requiredTrue]
    });
  }

  async enviar() {
    if (this.formulario.valid) {
      this.enviandoFormulario.set(true);
      
      // Simulación de envío (reemplazar con llamada HTTP real)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Formulario enviado:', this.formulario.value);
      
      this.enviandoFormulario.set(false);
      this.formularioEnviado.set(true);
      this.mostrarMensajeExito.set(true);
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        this.mostrarMensajeExito.set(false);
        this.formulario.reset();
        this.formularioEnviado.set(false);
      }, 5000);
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  get nombre() { return this.formulario.get('nombre'); }
  get email() { return this.formulario.get('email'); }
  get telefono() { return this.formulario.get('telefono'); }
  get tipoProyecto() { return this.formulario.get('tipoProyecto'); }
  get presupuesto() { return this.formulario.get('presupuesto'); }
  get descripcion() { return this.formulario.get('descripcion'); }
  get aceptoPolitica() { return this.formulario.get('aceptoPolitica'); }
}
