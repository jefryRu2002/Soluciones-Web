import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // ← IMPORTAR ROUTER

@Component({
  selector: 'app-olvidocontrasena',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './olvidocontrasena.html',
  styleUrl: './olvidocontrasena.css'
})
export class Olvidocontrasena {
  correo: string = '';

  constructor(private router: Router) {}  // ← INYECTAR ROUTER

  enviarCorreo() {
    if (!this.correo) {
      alert('Por favor ingrese su correo electrónico');
      return;
    }
    
    console.log('Enviando enlace a:', this.correo);
    alert('Se ha enviado un enlace de recuperación a su correo');
    this.router.navigate(['/']);  // ← NAVEGAR AL LOGIN
  }

  regresar() {
    console.log('Regresando al Login...');
    this.router.navigate(['/']);  // ← NAVEGAR AL LOGIN
  }
}