// tecnico/evaluaciones/evaluaciones.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Evaluacion {
  ticket: string;
  equipo: string;
  cliente: string;
  procesador: string;
  ram: string;
  almacenamiento: string;
  sistemaOperativo: string;
  detallesRevision: string;
  guardado: boolean;
}

@Component({
  selector: 'app-evaluaciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evaluacion-equipo.html',
  styleUrls: ['./evaluacion-equipo.css']
})
export class Evaluaciones {

  tickets = ['TK-001 — Laptop HP (Juan Pérez)', 'TK-002 — iPhone 13 (María López)', 'TK-004 — Tablet Samsung (José Ramos)'];
  ticketSeleccionado = '';
  guardado = false;
  error = '';

  evaluacion: Omit<Evaluacion, 'ticket' | 'equipo' | 'cliente' | 'guardado'> = {
    procesador: '',
    ram: '',
    almacenamiento: '',
    sistemaOperativo: '',
    detallesRevision: ''
  };

  guardarEvaluacion(): void {
    this.error = '';
    if (!this.ticketSeleccionado) { this.error = 'Selecciona un ticket.'; return; }
    if (!this.evaluacion.detallesRevision) { this.error = 'Los detalles de revisión son obligatorios.'; return; }
    this.guardado = true;
    setTimeout(() => this.guardado = false, 3000);
  }
}