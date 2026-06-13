// pages/configuracion/configuracion.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.css']
})
export class Configuracion {

  vistaActual = 'perfil';

  perfilAdmin = {
    nombre: 'Administrador',
    correo: 'admin@sistema.com',
    passwordActual: '',
    passwordNueva: '',
    confirmarNueva: ''
  };

  perfilGuardado = false;
  errorPerfil = '';

  guardarPerfil(): void {
    this.errorPerfil = '';

    if (!this.perfilAdmin.nombre || !this.perfilAdmin.correo) {
      this.errorPerfil = 'Nombre y correo son obligatorios.';
      return;
    }

    if (this.perfilAdmin.passwordNueva) {
      if (!this.perfilAdmin.passwordActual) {
        this.errorPerfil = 'Ingresa tu contraseña actual.';
        return;
      }
      if (this.perfilAdmin.passwordNueva !== this.perfilAdmin.confirmarNueva) {
        this.errorPerfil = 'Las contraseñas nuevas no coinciden.';
        return;
      }
      if (this.perfilAdmin.passwordNueva.length < 6) {
        this.errorPerfil = 'La contraseña debe tener al menos 6 caracteres.';
        return;
      }
    }

    this.perfilAdmin.passwordActual = '';
    this.perfilAdmin.passwordNueva = '';
    this.perfilAdmin.confirmarNueva = '';

    this.perfilGuardado = true;
    setTimeout(() => this.perfilGuardado = false, 3000);
  }
}