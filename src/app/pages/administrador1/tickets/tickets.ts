import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css'
})
export class Tickets {

  mostrarModal = false;

  tickets = [
    {
      id: 'TK-0001',
      cliente: 'Juan Pérez',
      fecha: '05/06/2026 10:15',
      estado: 'Pendiente',
      descripcion: 'Laptop no enciende'
    },
    {
      id: 'TK-0002',
      cliente: 'María López',
      fecha: '04/06/2026 16:30',
      estado: 'En revisión',
      descripcion: 'Pantalla con líneas'
    },
    {
      id: 'TK-0003',
      cliente: 'Carlos Ruiz',
      fecha: '03/06/2026 09:20',
      estado: 'En proceso',
      descripcion: 'Se apaga repentinamente'
    },
    {
      id: 'TK-0004',
      cliente: 'Ana Torres',
      fecha: '02/06/2026 11:05',
      estado: 'Finalizado',
      descripcion: 'Teclado no funciona'
    },
    {
      id: 'TK-0005',
      cliente: 'Luis Fernández',
      fecha: '01/06/2026 14:45',
      estado: 'Cancelado',
      descripcion: 'Problemas de WIFI'
    }
  ];

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarTicket() {
    alert('Ticket guardado');
    this.cerrarModal();
  }

}