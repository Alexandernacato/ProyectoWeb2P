import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosDesarrolladores } from './nuestros-desarrolladores';

describe('NuestrosDesarrolladores', () => {
  let component: NuestrosDesarrolladores;
  let fixture: ComponentFixture<NuestrosDesarrolladores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosDesarrolladores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosDesarrolladores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
