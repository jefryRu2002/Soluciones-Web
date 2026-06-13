import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesAdmin } from './notificaciones';

describe('Notificaciones', () => {
  let component: NotificacionesAdmin;
  let fixture: ComponentFixture<NotificacionesAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificacionesAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
