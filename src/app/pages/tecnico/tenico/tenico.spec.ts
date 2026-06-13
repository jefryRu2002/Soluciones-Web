import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenico } from './tenico';

describe('Tenico', () => {
  let component: Tenico;
  let fixture: ComponentFixture<Tenico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenico],
    }).compileComponents();

    fixture = TestBed.createComponent(Tenico);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
