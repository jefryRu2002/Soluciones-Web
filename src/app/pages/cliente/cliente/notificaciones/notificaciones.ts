// cliente/notificaciones/notificaciones.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Notificacion {
  id: number;
  titulo: string;
  mensaje: string;
  fecha: string;
  leida: boolean;
  tipo: 'estado' | 'pago' | 'entrega' | 'sistema';
}

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificaciones.html',
  styleUrls: ['./notificaciones.css']
})
export class Notificaciones {

  notificaciones = signal<Notificacion[]>([
    { id: 1, titulo: 'Equipo en reparación', mensaje: 'Tu Laptop HP (TK-001) ha pasado al estado "En Reparación".', fecha: '24/05/2026', leida: false, tipo: 'estado' },
    { id: 2, titulo: 'Técnico asignado', mensaje: 'Carlos Torres ha sido asignado a tu solicitud TK-001.', fecha: '23/05/2026', leida: false, tipo: 'estado' },
    { id: 3, titulo: 'Pago pendiente', mensaje: 'Tienes un pago pendiente de S/. 150.00 por la solicitud TK-001.', fecha: '22/05/2026', leida: true, tipo: 'pago' },
    { id: 4, titulo: 'Equipo listo para entrega', mensaje: 'Tu PC Gamer (TK-003) está listo para recoger.', fecha: '21/05/2026', leida: true, tipo: 'entrega' },
  ]);

  noLeidas = computed(() => this.notificaciones().filter(n => !n.leida).length);

  marcarLeida(id: number): void {
    this.notificaciones.update(lista =>
      lista.map(n => n.id === id ? { ...n, leida: true } : n)
    );
  }

  marcarTodasLeidas(): void {
    this.notificaciones.update(lista =>
      lista.map(n => ({ ...n, leida: true }))
    );
  }

  iconoTipo(tipo: Notificacion['tipo']): string {
    const iconos = { estado: '🔄', pago: '💳', entrega: '📦', sistema: '⚙️' };
    return iconos[tipo];
  }
}