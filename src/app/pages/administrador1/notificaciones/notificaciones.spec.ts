import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { NotificacionesAdmin } from './notificaciones';

describe('Notificaciones', () => {
  let component: NotificacionesAdmin;
  let fixture: ComponentFixture<NotificacionesAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificacionesAdmin);
=======
import { Notificaciones } from './notificaciones';

describe('Notificaciones', () => {
  let component: Notificaciones;
  let fixture: ComponentFixture<Notificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notificaciones],
    }).compileComponents();

    fixture = TestBed.createComponent(Notificaciones);
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
