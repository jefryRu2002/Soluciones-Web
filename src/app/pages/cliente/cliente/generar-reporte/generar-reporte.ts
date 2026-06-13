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

  // Variables auxiliares para controlar el flujo visual de la marca en el formulario
  marcaSeleccionada: string = '';
  otraMarca: string = '';

  reporte = {
    nombreCliente: 'Juan Pérez',
    cargo: '',
    servicio: '',
    marca: '', // Aquí se guardará el valor final ("HP", "Lenovo", etc., o la marca personalizada)
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

  // Controla el cambio en el select de marcas
  onMarcaChange(): void {
    if (this.marcaSeleccionada !== 'Otras') {
      this.reporte.marca = this.marcaSeleccionada;
      this.otraMarca = ''; // Resetea el input si el usuario cambia de opinión
    } else {
      this.reporte.marca = ''; // Queda vacío hasta que escriba en el input personalizado
    }
  }

  // Sincroniza el input de "Otras" con la propiedad marca del objeto reporte
  actualizarMarcaReporte(): void {
    this.reporte.marca = this.otraMarca;
  }

  enviarReporte(): void {
    this.error = '';
    
    // Se incluye la marca dentro de las validaciones obligatorias
    const obligatorios = [
      this.reporte.nombreCliente,
      this.reporte.marca,
      this.reporte.nombreEquipo,
      this.reporte.modelo,
      this.reporte.serie,
      this.reporte.descripcionFalla,
      this.reporte.recibidoPor
    ];

    // Se valida que existan y que no contengan solo espacios en blanco
    if (obligatorios.some(c => !c || !c.trim())) {
      this.error = 'Completa todos los campos obligatorios.';
      return;
    }

    // Genera código de operación
    this.codigoOperacion = 'OP-' + Date.now().toString().slice(-6);
    this.enviado = true;
  }

  nuevoReporte(): void {
    // Reseteamos las variables auxiliares de control de marcas
    this.marcaSeleccionada = '';
    this.otraMarca = '';

    this.reporte = {
      nombreCliente: 'Juan Pérez',
      cargo: '', 
      servicio: '', 
      marca: '',
      nombreEquipo: '',
      modelo: '', 
      serie: '', 
      descripcionFalla: '',
      informadoA: '', 
      recibidoPor: ''
    };
    
    this.enviado = false;
    this.codigoOperacion = '';
  }
}