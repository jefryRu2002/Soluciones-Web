import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class ClientePerfil implements OnInit {

  perfil = {
    nombre: '',
    dni: '',
    telefono: '',
    correo: ''
  };

  editando = false;
  guardado = false;
  error = '';

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil() {
    // Intentar cargar desde localStorage
    const clienteGuardado = localStorage.getItem('clienteActual');
    
    if (clienteGuardado) {
      const data = JSON.parse(clienteGuardado);
      this.perfil = {
        nombre: data.nombre || 'Juan Pérez',
        dni: data.dni || '12345678',
        telefono: data.telefono || '987654321',
        correo: data.email || 'juan@mail.com'
      };
    } else {
      // Datos por defecto si no hay nada en localStorage
      this.perfil = {
        nombre: 'Juan Pérez',
        dni: '12345678',
        telefono: '987654321',
        correo: 'juan@mail.com'
      };
    }
  }

  guardar(): void {
    this.error = '';
    
    // Validaciones
    if (!this.perfil.telefono || this.perfil.telefono.length < 9) {
      this.error = 'Teléfono inválido (mínimo 9 dígitos)';
      return;
    }
    
    if (!this.perfil.correo || !this.perfil.correo.includes('@')) {
      this.error = 'Correo electrónico inválido';
      return;
    }
    
    // Guardar en localStorage
    const clienteActualizado = {
      nombre: this.perfil.nombre,
      dni: this.perfil.dni,
      telefono: this.perfil.telefono,
      email: this.perfil.correo
    };
    
    localStorage.setItem('clienteActual', JSON.stringify(clienteActualizado));
    
    this.editando = false;
    this.guardado = true;
    
    setTimeout(() => {
      this.guardado = false;
    }, 3000);
  }

  cancelar(): void {
    // Recargar datos originales desde localStorage
    this.cargarPerfil();
    this.editando = false;
    this.error = '';
  }
}