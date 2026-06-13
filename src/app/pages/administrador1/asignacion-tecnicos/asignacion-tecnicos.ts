import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asignacion-tecnicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './asignacion-tecnicos.html',
  styleUrls: ['./asignacion-tecnicos.css']
})
export class AsignacionTecnicos {

  solicitudes = [

    {
      ticket: 'TK-001',
      cliente: 'Juan Pérez',
      equipo: 'Laptop HP',
      prioridad: 'Alta',
      tecnico: '',
      estado: 'Pendiente'
    },

    {
      ticket: 'TK-002',
      cliente: 'María López',
      equipo: 'iPhone 13',
      prioridad: 'Media',
      tecnico: '',
      estado: 'Pendiente'
    },

    {
      ticket: 'TK-003',
      cliente: 'José Ramos',
      equipo: 'PC Gamer',
      prioridad: 'Baja',
      tecnico: '',
      estado: 'Pendiente'
    }

  ];

  tecnicos = [
    'Carlos',
    'Pedro',
    'Luis',
    'Andrés'
  ];

  asignarTecnico(solicitud: any) {

    if(solicitud.tecnico !== ''){

      solicitud.estado = 'Asignado';

      alert(
        'Técnico asignado correctamente'
      );

    }

  }

}