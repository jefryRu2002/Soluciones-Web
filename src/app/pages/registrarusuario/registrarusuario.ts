import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // ← IMPORTAR ROUTER

@Component({
  selector: 'app-registrarusuario',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './registrarusuario.html',
  styleUrl: './registrarusuario.css',
})
export class Registrarusuario {
  
  // DECLARACIÓN DE TODAS LAS VARIABLES QUE USA EL HTML
  dni: string = '';
  nombreApellido: string = '';
  correo: string = '';
  telefono: string = '';
  fechaNacimiento: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';

  // ← INYECTAR ROUTER EN EL CONSTRUCTOR
  constructor(private router: Router) {}

  buscarDniReniec() {
    console.log('Buscando DNI en Reniec...', this.dni);
    // Aquí irá la lógica de su API de Reniec más adelante
  }

  registrarUsuario() {
    // ← AGREGAR VALIDACIONES
    if (!this.dni || !this.nombreApellido || !this.correo || !this.contrasena) {
      alert('Por favor complete todos los campos obligatorios');
      return;
    }

    if (this.contrasena !== this.confirmarContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Registrando usuario con los siguientes datos:', {
      dni: this.dni,
      nombre: this.nombreApellido,
      correo: this.correo,
      telefono: this.telefono,
      fechaNacimiento: this.fechaNacimiento
    });
    
    // ← REDIRIGIR AL LOGIN DESPUÉS DEL REGISTRO EXITOSO
    alert('Usuario registrado exitosamente');
    this.router.navigate(['/']);  // ← NAVEGAR AL LOGIN
  }

  // ← AGREGAR MÉTODO PARA REGRESAR AL LOGIN
  regresar() {
    this.router.navigate(['/']);
  }
}