// cliente/cliente/cliente.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class ClientePerfil {

  perfil = {
    nombre: 'Juan Pérez',
    dni: '12345678',
    telefono: '987654321',
    correo: 'juan@mail.com'
  };

  editando = false;
  guardado = false;
  error = '';

  guardar(): void {
    this.error = '';
    if (!this.perfil.telefono || !this.perfil.correo) {
      this.error = 'Teléfono y correo son obligatorios.';
      return;
    }
    this.editando = false;
    this.guardado = true;
    setTimeout(() => this.guardado = false, 3000);
  }

  cancelar(): void {
    this.editando = false;
    this.error = '';
  }
}