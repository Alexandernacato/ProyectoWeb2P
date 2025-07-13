import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimonio } from './testimonio';

describe('Testimonio', () => {
  let component: Testimonio;
  let fixture: ComponentFixture<Testimonio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimonio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
