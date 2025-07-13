import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoTrabajocard } from './proceso-trabajocard';

describe('ProcesoTrabajocard', () => {
  let component: ProcesoTrabajocard;
  let fixture: ComponentFixture<ProcesoTrabajocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcesoTrabajocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoTrabajocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
