import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEquipo } from './evaluacion-equipo';

describe('EvaluacionEquipo', () => {
  let component: EvaluacionEquipo;
  let fixture: ComponentFixture<EvaluacionEquipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionEquipo],
    }).compileComponents();

    fixture = TestBed.createComponent(EvaluacionEquipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
