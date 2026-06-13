import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacionesCurso } from './reparaciones-curso';

describe('ReparacionesCurso', () => {
  let component: ReparacionesCurso;
  let fixture: ComponentFixture<ReparacionesCurso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReparacionesCurso],
    }).compileComponents();

    fixture = TestBed.createComponent(ReparacionesCurso);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
