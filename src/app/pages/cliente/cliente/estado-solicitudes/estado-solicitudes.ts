// cliente/estado-solicitudes/estado-solicitudes.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type EstadoTicket = 'Reportado' | 'Recibido' | 'Asignado' | 'Reparación' | 'Pruebas' | 'Entrega';

export interface Solicitud {
  ticket: string;
  equipo: string;
  modelo: string;
  estado: EstadoTicket;
  tecnico: string;
  fecha: string;
  ultimaActualizacion: string;
}

@Component({
  selector: 'app-estado-solicitudes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estado-solicitudes.html',
  styleUrls: ['./estado-solicitudes.css']
})
export class EstadoSolicitudes {

  buscador = '';

  readonly pasos: EstadoTicket[] = ['Reportado','Recibido','Asignado','Reparación','Pruebas','Entrega'];

  solicitudes = signal<Solicitud[]>([
    { ticket: 'TK-001', equipo: 'Laptop HP',  modelo: 'Pavilion 15', estado: 'Reparación', tecnico: 'Carlos', fecha: '20/05/2026', ultimaActualizacion: '23/05/2026' },
    { ticket: 'TK-002', equipo: 'iPhone 13',  modelo: 'A2633',       estado: 'Recibido',   tecnico: 'Luis',   fecha: '21/05/2026', ultimaActualizacion: '22/05/2026' },
    { ticket: 'TK-003', equipo: 'PC Gamer',   modelo: 'Custom',      estado: 'Entrega',    tecnico: 'Pedro',  fecha: '18/05/2026', ultimaActualizacion: '24/05/2026' },
  ]);

  filtradas = computed(() => {
    const q = this.buscador.toLowerCase();
    return this.solicitudes().filter(s =>
      s.ticket.toLowerCase().includes(q) ||
      s.equipo.toLowerCase().includes(q)
    );
  });

  pasoIndex(estado: EstadoTicket): number {
    return this.pasos.indexOf(estado);
  }
}