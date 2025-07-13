import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolladorCard } from './desarrollador-card';

describe('DesarrolladorCard', () => {
  let component: DesarrolladorCard;
  let fixture: ComponentFixture<DesarrolladorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolladorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolladorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
