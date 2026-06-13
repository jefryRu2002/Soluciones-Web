import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz local para definir la estructura de tus objetos
interface NotificacionEstructura {
  id: number;
  tipo: 'pago' | 'tecnico' | 'usuario' | 'ticket';
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  leido: boolean;
}

@Component({
  selector: 'app-notificaciones-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificaciones.html',
  styleUrl: './notificaciones.css'
})
export class NotificacionesAdmin {
  
  // Usamos la interfaz local para tipar el arreglo
  notificaciones: NotificacionEstructura[] = [
    {
      id: 1,
      tipo: 'tecnico',
      titulo: 'Equipo declarado Irreparable',
      descripcion: 'El Técnico Alejandro Solís dio de baja la Orden #101 (Asus ROG Strix) por daño crítico en PCB. Requiere devolución.',
      fecha: 'Hoy',
      hora: '11:45 AM',
      leido: false
    },
    {
      id: 2,
      tipo: 'pago',
      titulo: 'Nuevo pago registrado',
      descripcion: 'El cliente Carlos Mendoza subió un comprobante por S/. 120.00 correspondiente a la solicitud de reparación.',
      fecha: 'Hoy',
      hora: '09:15 AM',
      leido: false
    },
    {
      id: 3,
      tipo: 'ticket',
      titulo: 'Cambio de estado en Ticket',
      descripcion: 'La Orden #98 pasó de "En Evaluación" a "En Reparación" por el técnico asignado.',
      fecha: 'Ayer',
      hora: '04:30 PM',
      leido: true
    },
    {
      id: 4,
      tipo: 'usuario',
      titulo: 'Nuevo usuario registrado',
      descripcion: 'Un nuevo cliente se ha registrado en la plataforma bajo el correo: lucia.f@outlook.com.',
      fecha: 'Ayer',
      hora: '02:10 PM',
      leido: true
    }
  ];

  marcarComoLeida(id: number) {
    const noti = this.notificaciones.find(n => n.id === id);
    if (noti) {
      noti.leido = true;
    }
  }

  marcarTodasComoLeidas() {
    this.notificaciones.forEach(n => n.leido = true);
  }
}