// cliente/generar-reporte/generar-reporte.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generar-reporte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './generar-reporte.html',
  styleUrls: ['./generar-reporte.css']
})
export class GenerarReporte {

  reporte = {
    nombreCliente: 'Juan Pérez',
    cargo: '',
    servicio: '',
    nombreEquipo: '',
    modelo: '',
    serie: '',
    descripcionFalla: '',
    informadoA: '',
    recibidoPor: ''
  };

  enviado = false;
  codigoOperacion = '';
  error = '';

  enviarReporte(): void {
    this.error = '';
    const obligatorios = [
      this.reporte.nombreCliente,
      this.reporte.nombreEquipo,
      this.reporte.modelo,
      this.reporte.serie,
      this.reporte.descripcionFalla,
      this.reporte.recibidoPor
    ];

    if (obligatorios.some(c => !c.trim())) {
      this.error = 'Completa todos los campos obligatorios.';
      return;
    }

    // Genera código de operación
    this.codigoOperacion = 'OP-' + Date.now().toString().slice(-6);
    this.enviado = true;
  }

  nuevoReporte(): void {
    this.reporte = {
      nombreCliente: 'Juan Pérez',
      cargo: '', servicio: '', nombreEquipo: '',
      modelo: '', serie: '', descripcionFalla: '',
      informadoA: '', recibidoPor: ''
    };
    this.enviado = false;
    this.codigoOperacion = '';
  }
}