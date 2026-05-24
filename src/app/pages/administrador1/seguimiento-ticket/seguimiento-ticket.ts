import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seguimiento-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seguimiento-ticket.html',
  styleUrls: ['./seguimiento-ticket.css']
})
export class SeguimientoTicket {

  tickets = [

    {
      codigo: 'TK-001',
      cliente: 'Juan Pérez',
      equipo: 'Laptop HP',
      tecnico: 'Carlos',
      estado: 'En Diagnóstico',
      progreso: 40,
      fecha: '20/05/2026'
    },

    {
      codigo: 'TK-002',
      cliente: 'María López',
      equipo: 'iPhone 13',
      tecnico: 'Pedro',
      estado: 'En Reparación',
      progreso: 70,
      fecha: '21/05/2026'
    },

    {
      codigo: 'TK-003',
      cliente: 'José Ramos',
      equipo: 'PC Gamer',
      tecnico: 'Luis',
      estado: 'Listo para Entrega',
      progreso: 100,
      fecha: '22/05/2026'
    }

  ];

}