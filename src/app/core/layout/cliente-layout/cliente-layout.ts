import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-layout.html',
  styleUrls: ['./cliente-layout.css']
})
export class ClienteLayout {
  nombreCliente = 'Juan Pérez';

  cerrarSesion() {
    localStorage.removeItem('clienteActual');
    window.location.href = '/login';
  }
}