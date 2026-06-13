import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';

interface DevolucionEquipo {
  id: number;
  cliente: string;
  correoCliente: string;
  equipo: string;
  tecnico: string;
  motivoFalla: string;
  fechaDiagnostico: string;
  estadoNotificacion: 'Pendiente' | 'Notificado';
}

@Component({
  selector: 'app-devoluciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devoluciones.html',
  styleUrl: './devoluciones.css',
})
export class Devoluciones {
  // Lista ficticia de equipos irreparables reportados por los técnicos
  equiposIrreparables: DevolucionEquipo[] = [
    {
      id: 101,
      cliente: 'Roberto Carlos Vega',
      correoCliente: 'roberto.vega@gmail.com',
      equipo: 'Tarjetas Madre - Asus ROG Strix Z490',
      tecnico: 'Ing. Alejandro Solís',
      motivoFalla: 'Cortocircuito en capas internas del PCB por derrame de líquido. Irreparable.',
      fechaDiagnostico: '04/06/2026',
      estadoNotificacion: 'Pendiente'
    },
    {
      id: 105,
      cliente: 'Lucía Fernández',
      correoCliente: 'lucia.f@outlook.com',
      equipo: 'Smart TV Samsung 55" Crystal',
      tecnico: 'Téc. Marcos Aurelio',
      motivoFalla: 'Panel LED completamente trizado internamente. Costo de repuesto excede valor comercial.',
      fechaDiagnostico: '05/06/2026',
      estadoNotificacion: 'Notificado'
    }
  ];

  // Método para simular la notificación al cliente
  notificarCliente(id: number) {
    const equipo = this.equiposIrreparables.find(e => e.id === id);
    if (equipo) {
      equipo.estadoNotificacion = 'Notificado';
      alert(`Se ha enviado una alerta de devolución al correo del cliente: ${equipo.correoCliente}`);
    }
  }
}
=======

@Component({
  selector: 'app-devoluciones',
  imports: [],
  templateUrl: './devoluciones.html',
  styleUrl: './devoluciones.css',
})
export class Devoluciones {}
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4
