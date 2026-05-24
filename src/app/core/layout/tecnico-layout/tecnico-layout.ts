import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tecnico-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tecnico-layout.html',
  styleUrls: ['./tecnico-layout.css']
})
export class TecnicoLayout {
  nombreTecnico = 'Carlos López';

  cerrarSesion() {
    // Limpiar localStorage
    localStorage.removeItem('tecnicoActual');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('clienteActual');
    
    // Redirigir al login
    window.location.href = '/login';
  }
}