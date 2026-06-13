import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoTicket } from './seguimiento-ticket';

describe('SeguimientoTicket', () => {
  let component: SeguimientoTicket;
  let fixture: ComponentFixture<SeguimientoTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguimientoTicket],
    }).compileComponents();

    fixture = TestBed.createComponent(SeguimientoTicket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
