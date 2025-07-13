import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desarrollos } from './desarrollos';

describe('Desarrollos', () => {
  let component: Desarrollos;
  let fixture: ComponentFixture<Desarrollos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desarrollos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desarrollos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
