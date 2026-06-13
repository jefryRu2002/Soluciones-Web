import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionTecnicos } from './asignacion-tecnicos';

describe('AsignacionTecnicos', () => {
  let component: AsignacionTecnicos;
  let fixture: ComponentFixture<AsignacionTecnicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionTecnicos],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignacionTecnicos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
