import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoTrabajo } from './proceso-trabajo';

describe('ProcesoTrabajo', () => {
  let component: ProcesoTrabajo;
  let fixture: ComponentFixture<ProcesoTrabajo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoTrabajo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoTrabajo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
