import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolladorModal } from './desarrollador-modal';

describe('DesarrolladorModal', () => {
  let component: DesarrolladorModal;
  let fixture: ComponentFixture<DesarrolladorModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesarrolladorModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolladorModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
