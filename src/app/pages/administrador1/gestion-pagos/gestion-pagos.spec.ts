import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestion_Pagos } from './gestion-pagos';

describe('Pagos', () => {
  let component: Gestion_Pagos;
  let fixture: ComponentFixture<Gestion_Pagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gestion_Pagos],
    }).compileComponents();

    fixture = TestBed.createComponent(Gestion_Pagos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
