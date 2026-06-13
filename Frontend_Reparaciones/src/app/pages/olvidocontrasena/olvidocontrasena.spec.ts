import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olvidocontrasena } from './olvidocontrasena';

describe('Olvidocontrasena', () => {
  let component: Olvidocontrasena;
  let fixture: ComponentFixture<Olvidocontrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Olvidocontrasena],
    }).compileComponents();

    fixture = TestBed.createComponent(Olvidocontrasena);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
