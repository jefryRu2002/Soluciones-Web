import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type MetodoPago = 'tarjeta' | 'transferencia' | 'billetera';

export interface Pago {
  ticket: string;
  monto: number;
  descripcion: string;
  estado: 'Pendiente' | 'Pagado';
}

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagos.html',
  styleUrls: ['./pagos.css']
})
export class Pagos {

  metodoPago: MetodoPago = 'tarjeta';

  pagosPendientes = signal<Pago[]>([
    {
      ticket: 'TK-001',
      monto: 150.00,
      descripcion: 'Reparación Laptop HP',
      estado: 'Pendiente'
    },
    {
      ticket: 'TK-002',
      monto: 80.00,
      descripcion: 'Cambio de pantalla Dell',
      estado: 'Pendiente'
    }
  ]);

  datosTarjeta = {
    numero: '',
    nombre: '',
    vencimiento: '',
    cvv: ''
  };

  datosTransferencia = {
    banco: '',
    numeroCuenta: '',
    operacion: ''
  };

  datosBilletera = {
    tipo: 'yape',
    telefono: ''
  };

  pagoSeleccionado: Pago | null = null;
  procesando = false;
  pagoExitoso = false;

  seleccionarPago(pago: Pago): void {
    this.pagoSeleccionado = pago;
    this.pagoExitoso = false;
  }

  procesarPago(): void {
    if (!this.pagoSeleccionado) return;

    this.procesando = true;

    setTimeout(() => {
      this.pagosPendientes.update(lista =>
        lista.map(p =>
          p.ticket === this.pagoSeleccionado!.ticket
            ? { ...p, estado: 'Pagado' as const }
            : p
        )
      );
      this.procesando = false;
      this.pagoExitoso = true;
      this.pagoSeleccionado = null;
    }, 1500);
  }

  get totalPendiente(): number {
    return this.pagosPendientes()
      .filter(p => p.estado === 'Pendiente')
      .reduce((sum, p) => sum + p.monto, 0);
  }
}