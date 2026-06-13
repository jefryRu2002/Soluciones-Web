import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrarusuario } from './registrarusuario';

describe('Registrarusuario', () => {
  let component: Registrarusuario;
  let fixture: ComponentFixture<Registrarusuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrarusuario],
    }).compileComponents();

    fixture = TestBed.createComponent(Registrarusuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
