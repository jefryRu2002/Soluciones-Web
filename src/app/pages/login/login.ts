import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  titulo = "Bienvenido";
  visible = 0;

  usuario = "";
  contrasena = "";

  mostrar() {
    this.visible = 1;
  }

  ocultar() {
    this.visible = 0;
  }

  iniciarSesion() {

    if (this.usuario == "" && this.contrasena == "") {
      alert("Por favor rellene los espacios");
    }
    else {
      alert("Bienvenido");
    }

  }

  mostrarMFA = false;

  
}