import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orden-trabajo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orden-trabajo.html',
  styleUrl: './orden-trabajo.css'
})
export class OrdenTrabajo {

  estadoFiltro = 'Todos';
  mostrarModalEditar = false;
  ordenSeleccionada: any = {};

  ordenes = [
    {
      id:'OT-0001',
      ticket:'TK-0001',
      cliente:'Juan Pérez',
      equipo:'Laptop HP 15',
      problema:'No enciende',
      tecnico:'Carlos Méndez',
      fecha:'05/06/2026 11:00',
      estado:'En proceso'
    },
    {
      id:'OT-0002',
      ticket:'TK-0002',
      cliente:'María López',
      equipo:'Laptop Dell',
      problema:'Pantalla con líneas',
      tecnico:'Ana Gómez',
      fecha:'04/06/2026 17:00',
      estado:'En revisión'
    },
    {
      id:'OT-0003',
      ticket:'TK-0003',
      cliente:'Carlos Ruiz',
      equipo:'PC Escritorio',
      problema:'Se apaga repentinamente',
      tecnico:'Luis Martínez',
      fecha:'03/06/2026 10:00',
      estado:'Pendiente'
    },
    {
      id:'OT-0004',
      ticket:'TK-0004',
      cliente:'Ana Torres',
      equipo:'Laptop Lenovo',
      problema:'Teclado no funciona',
      tecnico:'Carlos Méndez',
      fecha:'02/06/2026 12:00',
      estado:'Finalizado'
    }
  ];

  get ordenesFiltradas() {

    if (this.estadoFiltro === 'Todos') {
      return this.ordenes;
    }

    return this.ordenes.filter(
      orden => orden.estado === this.estadoFiltro
    );

  }

  abrirModalEditar(orden: any) {

  this.ordenSeleccionada = { ...orden };

  this.mostrarModalEditar = true;

}

cerrarModalEditar() {

  this.mostrarModalEditar = false;

}

guardarCambios() {

  const indice = this.ordenes.findIndex(
    o => o.id === this.ordenSeleccionada.id
  );

  if (indice !== -1) {

    this.ordenes[indice] = {
      ...this.ordenSeleccionada
    };

  }

  alert('Orden actualizada correctamente');

  this.cerrarModalEditar();

}

  nuevaOrden() {
    alert('Nueva Orden');
  }

  ver(id:string){
    alert('Ver ' + id);
  }

  editar(id:string){
    alert('Editar ' + id);
  }

  eliminar(id:string){
    alert('Eliminar ' + id);
  }

}