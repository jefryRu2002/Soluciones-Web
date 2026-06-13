// tecnico/reparaciones/reparaciones.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type EstadoReparacion = 'En recepción' | 'En diagnóstico' | 'En reparación' | 'En pruebas' | 'Listo para entrega';

export interface Reparacion {
  ticket: string;
  equipo: string;
  cliente: string;
  estado: EstadoReparacion;
  plazo: string;
}

@Component({
  selector: 'app-reparaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reparaciones-curso.html',
  styleUrls: ['./reparaciones-curso.css']
})
export class Reparaciones {

  readonly estados: EstadoReparacion[] = ['En recepción','En diagnóstico','En reparación','En pruebas','Listo para entrega'];

  reparaciones = signal<Reparacion[]>([
    { ticket: 'TK-001', equipo: 'Laptop HP',      cliente: 'Juan Pérez',  estado: 'En reparación',  plazo: '25/05/2026' },
    { ticket: 'TK-002', equipo: 'iPhone 13',      cliente: 'María López', estado: 'En diagnóstico', plazo: '26/05/2026' },
    { ticket: 'TK-004', equipo: 'Tablet Samsung', cliente: 'José Ramos',  estado: 'En pruebas',     plazo: '24/05/2026' },
  ]);

  private ciclo: Record<EstadoReparacion, EstadoReparacion> = {
    'En recepción':        'En diagnóstico',
    'En diagnóstico':      'En reparación',
    'En reparación':       'En pruebas',
    'En pruebas':          'Listo para entrega',
    'Listo para entrega':  'Listo para entrega'
  };

  avanzar(ticket: string): void {
    this.reparaciones.update(lista =>
      lista.map(r => r.ticket === ticket
        ? { ...r, estado: this.ciclo[r.estado] }
        : r
      )
    );
  }

  claseEstado(estado: EstadoReparacion): string {
    if (estado === 'Listo para entrega') return 'terminado';
    if (estado === 'En pruebas') return 'morado';
    return 'proceso';
  }
}