import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testimoniocard } from './testimoniocard';

describe('Testimoniocard', () => {
  let component: Testimoniocard;
  let fixture: ComponentFixture<Testimoniocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimoniocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testimoniocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
