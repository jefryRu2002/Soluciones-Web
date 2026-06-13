// tecnico/tecnico-dashboard/tecnico-dashboard.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tecnico-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tecnico-dashboard.html',
  styleUrls: ['./tecnico-dashboard.css']
})
export class TecnicoDashboard {

  nombreTecnico = 'Carlos Torres';

  resumen = [
    { label: 'Órdenes asignadas', value: 4, icono: '📋', color: 'azul' },
    { label: 'En reparación',     value: 2, icono: '🔧', color: 'amarillo' },
    { label: 'En pruebas',        value: 1, icono: '🧪', color: 'morado' },
    { label: 'Listos para entrega', value: 1, icono: '✅', color: 'verde' },
  ];

  ordenesRecientes = [
    { ticket: 'TK-001', equipo: 'Laptop HP',  cliente: 'Juan Pérez',   estado: 'Reparación', plazo: '25/05/2026' },
    { ticket: 'TK-002', equipo: 'iPhone 13',  cliente: 'María López',  estado: 'Diagnóstico', plazo: '26/05/2026' },
    { ticket: 'TK-004', equipo: 'Tablet Samsung', cliente: 'José Ramos', estado: 'Pruebas', plazo: '24/05/2026' },
  ];
}