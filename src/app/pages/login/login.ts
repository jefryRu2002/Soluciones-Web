import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] 
})
export class Login {

  titulo = "Bienvenido";

  usuario = "";
  contrasena = "";

  mostrarMFA = false;
  codigoMFA = "";

  rol: string = "";
  esCliente = false;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("Login cargado correctamente");
  }

  iniciarSesion() {

    // 🔥 validación básica
    if (!this.usuario || !this.contrasena) {
      alert("Por favor rellene los espacios");
      return;
    }

    // 🔥 usuarios simulados
    const usuariosValidos = ["admin", "tecnico", "cliente"];

    if (!usuariosValidos.includes(this.usuario)) {
      alert("Usuario incorrecto");
      this.resetLogin();
      return;
    }

    // 🔐 asignar rol
    if (this.usuario === "admin") {
      this.rol = "admin";
    } else if (this.usuario === "tecnico") {
      this.rol = "tecnico";
    } else {
      this.rol = "cliente";
    }

    // 👇 detectar cliente
    this.esCliente = this.rol === "cliente";

    // 🔐 activar MFA
    this.mostrarMFA = true;
  }

  validarMFA() {

    if (this.codigoMFA !== "1234") {
      alert("Código MFA incorrecto");
      return;
    }

    localStorage.setItem("role", this.rol);
    localStorage.setItem("usuario", this.usuario);

    alert("Acceso permitido");

    // 🚀 redirección por rol
    if (this.rol === "admin") {
      this.router.navigate(['/administrador/dashboard']);
      return;
    }

    if (this.rol === "tecnico") {
      this.router.navigate(['/administrador/tecnico']);
      return;
    }

    if (this.rol === "cliente") {
      this.router.navigate(['/administrador/perfil-cliente']);
      return;
    }
  }

  resetLogin() {
    this.usuario = "";
    this.contrasena = "";
    this.mostrarMFA = false;
    this.codigoMFA = "";
    this.rol = "";
    this.esCliente = false;
  }

  olvidasteContrasena() {
    alert("Se enviará un enlace de recuperación al correo (simulado)");
  }
}