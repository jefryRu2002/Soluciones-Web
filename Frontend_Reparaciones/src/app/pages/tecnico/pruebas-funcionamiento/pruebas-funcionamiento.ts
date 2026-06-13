// tecnico/pruebas-funcionamiento/pruebas-funcionamiento.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Prueba {
  id: number;
  nombre: string;
  resultado: 'pendiente' | 'ok' | 'falla';
}

@Component({
  selector: 'app-pruebas-funcionamiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pruebas-funcionamiento.html',
  styleUrls: ['./pruebas-funcionamiento.css']
})
export class PruebasFuncionamiento {

  tickets = ['TK-001 — Laptop HP', 'TK-004 — Tablet Samsung'];
  ticketSeleccionado = '';
  observaciones = '';
  guardado = false;
  error = '';

  pruebas = signal<Prueba[]>([
    { id: 1, nombre: 'Encendido y arranque',     resultado: 'pendiente' },
    { id: 2, nombre: 'Funcionamiento de pantalla', resultado: 'pendiente' },
    { id: 3, nombre: 'Conectividad WiFi',         resultado: 'pendiente' },
    { id: 4, nombre: 'Puertos USB / carga',       resultado: 'pendiente' },
    { id: 5, nombre: 'Batería y autonomía',        resultado: 'pendiente' },
    { id: 6, nombre: 'Rendimiento general',        resultado: 'pendiente' },
  ]);

  setResultado(id: number, resultado: Prueba['resultado']): void {
    this.pruebas.update(lista =>
      lista.map(p => p.id === id ? { ...p, resultado } : p)
    );
  }

  get todasCompletadas(): boolean {
    return this.pruebas().every(p => p.resultado !== 'pendiente');
  }

  get hayFallas(): boolean {
    return this.pruebas().some(p => p.resultado === 'falla');
  }

  guardar(): void {
    this.error = '';
    if (!this.ticketSeleccionado) { this.error = 'Selecciona un ticket.'; return; }
    if (!this.todasCompletadas)   { this.error = 'Completa todas las pruebas.'; return; }
    this.guardado = true;
    setTimeout(() => this.guardado = false, 3000);
  }
}