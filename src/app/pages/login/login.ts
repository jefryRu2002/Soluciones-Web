import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {

  titulo: string = 'Bienvenido';

  usuario: string = '';
  contrasena: string = '';

  mostrarMFA: boolean = false;
  codigoMFA: string = '';

  rol: string = '';
  esCliente: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Login cargado correctamente');
  }

  iniciarSesion(): void {

    if (!this.usuario || !this.contrasena) {
      alert('Por favor rellene los espacios');
      return;
    }

    const usuariosValidos: string[] = ['admin', 'tecnico', 'cliente'];

    if (!usuariosValidos.includes(this.usuario)) {
      alert('Usuario incorrecto');
      this.resetLogin();
      return;
    }

    if (this.usuario === 'admin') {
      this.rol = 'admin';
    } else if (this.usuario === 'tecnico') {
      this.rol = 'tecnico';
    } else {
      this.rol = 'cliente';
    }

    this.esCliente = this.rol === 'cliente';
    this.mostrarMFA = true;
  }

  validarMFA(): void {

    if (this.codigoMFA !== '1234') {
      alert('Código MFA incorrecto');
      return;
    }

    localStorage.setItem('role', this.rol);
    localStorage.setItem('usuario', this.usuario);

    alert('Acceso permitido');

    switch (this.rol) {
      case 'admin':
        this.router.navigate(['/administrador/dashboard']);
        break;

      case 'tecnico':
        this.router.navigate(['/tecnico/ordenes-asignadas']);
        break;

      case 'cliente':
        this.router.navigate(['/cliente/dashboard']);
        break;
    }
  }

  irARegistro(): void {
    this.router.navigate(['/registrarusuario']);
  }

  olvidasteContrasena(): void {
    this.router.navigate(['/olvidocontrasena']);
  }

  resetLogin(): void {
    this.usuario = '';
    this.contrasena = '';
    this.mostrarMFA = false;
    this.codigoMFA = '';
    this.rol = '';
    this.esCliente = false;
  }
}