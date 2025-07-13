import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviciocard } from './serviciocard';

describe('Serviciocard', () => {
  let component: Serviciocard;
  let fixture: ComponentFixture<Serviciocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Serviciocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serviciocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
