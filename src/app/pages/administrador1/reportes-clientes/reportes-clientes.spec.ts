import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesClientes } from './reportes-clientes';

describe('ReportesClientes', () => {
  let component: ReportesClientes;
  let fixture: ComponentFixture<ReportesClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportesClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
