// tecnico/ordenes-asignadas/ordenes-asignadas.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Orden {
  ticket: string;
  cliente: string;
  equipo: string;
  modelo: string;
  serie: string;
  descripcion: string;
  fechaIngreso: string;
  plazo: string;
  recepcionada: boolean;
}

@Component({
  selector: 'app-ordenes-asignadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ordenes-asignadas.html',
  styleUrls: ['./ordenes-asignadas.css']
})
export class OrdenesAsignadas {

  ordenes = signal<Orden[]>([
    { ticket: 'TK-001', cliente: 'Juan Pérez',  equipo: 'Laptop HP',      modelo: 'Pavilion 15', serie: 'SN123', descripcion: 'No enciende, posible falla en la placa madre.', fechaIngreso: '20/05/2026', plazo: '25/05/2026', recepcionada: false },
    { ticket: 'TK-002', cliente: 'María López', equipo: 'iPhone 13',      modelo: 'A2633',       serie: 'SN456', descripcion: 'Pantalla rota, no responde al tacto.',           fechaIngreso: '21/05/2026', plazo: '26/05/2026', recepcionada: true  },
    { ticket: 'TK-004', cliente: 'José Ramos',  equipo: 'Tablet Samsung', modelo: 'Tab S7',      serie: 'SN789', descripcion: 'Batería no carga, se apaga sola.',               fechaIngreso: '22/05/2026', plazo: '27/05/2026', recepcionada: false },
  ]);

  ordenDetalle: Orden | null = null;

  recepcionar(ticket: string): void {
    this.ordenes.update(lista =>
      lista.map(o => o.ticket === ticket ? { ...o, recepcionada: true } : o)
    );
    if (this.ordenDetalle?.ticket === ticket) {
      this.ordenDetalle = { ...this.ordenDetalle, recepcionada: true };
    }
  }
}