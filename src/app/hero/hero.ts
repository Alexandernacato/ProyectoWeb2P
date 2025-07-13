import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'] 
})
export class Hero implements OnInit {
      fullText = 'Desarrollamos Software<br>Innovador para tu Negocio';
  displayText = '';
  i = 0;
  forward = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.forward) {
      if (this.i <= this.fullText.length) {
        this.displayText = this.fullText.substring(0, this.i);
        this.i++;
        this.cdr.detectChanges();
        setTimeout(() => this.typeWriter(), 60);
      } else {
        this.forward = false;
        setTimeout(() => this.typeWriter(), 1200);
      }
    } else {
      if (this.i >= 0) {
        this.displayText = this.fullText.substring(0, this.i);
        this.i--;
        this.cdr.detectChanges();
        setTimeout(() => this.typeWriter(), 30);
      } else {
        this.forward = true;
        setTimeout(() => this.typeWriter(), 600);
      }
    }
  }
}
