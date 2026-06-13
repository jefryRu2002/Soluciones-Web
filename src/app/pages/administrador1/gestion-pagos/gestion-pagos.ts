import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-pagos.html',
  styleUrl: './gestion-pagos.css',
})
export class Gestion_Pagos {

  pagos = [
    {
      id: 1,
      cliente: 'Juan Pérez',
      solicitud: 'REP-001',
      monto: 150,
      metodo: 'Yape',
      fecha: '2026-06-05',
      estado: 'Aprobado'
    },
    {
      id: 2,
      cliente: 'María Gómez',
      solicitud: 'REP-002',
      monto: 220,
      metodo: 'Transferencia',
      fecha: '2026-06-05',
      estado: 'Pendiente'
    }
  ];

}