import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// INTERFAZ TIPADA
export interface Reporte {
  ticket: string;
  cliente: string;
  equipo: string;
  estado: 'Pendiente' | 'En Proceso' | 'Terminado';
  tecnico: string;
  fecha: string;
}

@Component({
  selector: 'app-reportes-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reportes-clientes.html',
  styleUrls: ['./reportes-clientes.css']
})
export class ReportesClientes {

  buscador = '';

  // SIGNALS — reactividad moderna en lugar de arrays mutables
  reportes = signal<Reporte[]>([
    {
      ticket: 'TK-001',
      cliente: 'Juan Pérez',
      equipo: 'Laptop HP',
      estado: 'Pendiente',
      tecnico: 'Sin asignar',
      fecha: '20/05/2026'
    },
    {
      ticket: 'TK-002',
      cliente: 'María López',
      equipo: 'iPhone 13',
      estado: 'En Proceso',
      tecnico: 'Carlos',
      fecha: '21/05/2026'
    },
    {
      ticket: 'TK-003',
      cliente: 'José Ramos',
      equipo: 'PC Gamer',
      estado: 'Terminado',
      tecnico: 'Luis',
      fecha: '22/05/2026'
    }
  ]);

  // COMPUTED — se recalcula solo cuando cambia reportes o buscador
  reportesFiltrados = computed(() => {
    const q = this.buscador.toLowerCase();
    return this.reportes().filter(r =>
      r.cliente.toLowerCase().includes(q) ||
      r.ticket.toLowerCase().includes(q)
    );
  });

  // CONTADORES reactivos
  totalPendientes  = computed(() => this.contarEstado('Pendiente'));
  totalEnProceso   = computed(() => this.contarEstado('En Proceso'));
  totalTerminados  = computed(() => this.contarEstado('Terminado'));

  // CICLO DE ESTADOS
  private readonly cicloEstado: Record<Reporte['estado'], Reporte['estado']> = {
    'Pendiente':  'En Proceso',
    'En Proceso': 'Terminado',
    'Terminado':  'Pendiente'
  };

  cambiarEstado(reporte: Reporte): void {
    this.reportes.update(lista =>
      lista.map(r =>
        r.ticket === reporte.ticket
          ? { ...r, estado: this.cicloEstado[r.estado] }
          : r
      )
    );
  }

  editarReporte(reporte: Reporte): void {
    // reemplazar con modal o navegación según el proyecto
    console.log('Editando:', reporte.ticket);
  }

  eliminarReporte(ticket: string): void {
    if (!confirm(`¿Eliminar el reporte ${ticket}?`)) return;
    this.reportes.update(lista =>
      lista.filter(r => r.ticket !== ticket)
    );
  }

  nuevoReporte(): void {
    // navegar a formulario o abrir modal
    console.log('Nuevo reporte');
  }

  contarEstado(estado: Reporte['estado']): number {
    return this.reportes().filter(r => r.estado === estado).length;
  }
}