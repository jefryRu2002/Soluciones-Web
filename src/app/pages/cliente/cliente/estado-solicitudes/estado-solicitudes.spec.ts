import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoSolicitudes } from './estado-solicitudes';

describe('EstadoSolicitudes', () => {
  let component: EstadoSolicitudes;
  let fixture: ComponentFixture<EstadoSolicitudes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoSolicitudes],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoSolicitudes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
