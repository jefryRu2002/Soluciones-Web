import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasFuncionamiento } from './pruebas-funcionamiento';

describe('PruebasFuncionamiento', () => {
  let component: PruebasFuncionamiento;
  let fixture: ComponentFixture<PruebasFuncionamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebasFuncionamiento],
    }).compileComponents();

    fixture = TestBed.createComponent(PruebasFuncionamiento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
