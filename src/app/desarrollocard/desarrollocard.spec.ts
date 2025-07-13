import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desarrollocard } from './desarrollocard';

describe('Desarrollocard', () => {
  let component: Desarrollocard;
  let fixture: ComponentFixture<Desarrollocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desarrollocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desarrollocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
