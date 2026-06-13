import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-gestion-usuarios',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './gestion-usuarios.html',

  styleUrls: ['./gestion-usuarios.css']

})

export class GestionUsuarios {

  buscador: string = '';

  mostrarOpciones = false;

  tipoUsuario = "";

  mostrarModal = false;

  filtroRol: string = '';

  usuarios = [

    {
      nombre: 'Juan',
      apellido: 'Pérez',
      correo: 'juan@gmail.com',
      telefono: '987654321',
      direccion: 'Av. Perú 123',
      rol: 'Cliente',
      estado: 'Activo'
    },

    {
      nombre: 'Carlos',
      apellido: 'Ramos',
      correo: 'carlos@gmail.com',
      telefono: '912345678',
      especialidad: 'Hardware',
      nivel: 'Senior',
      sueldo: 2500,
      rol: 'Técnico',
      estado: 'Activo'
    },

    {
      nombre: 'María',
      apellido: 'López',
      correo: 'maria@gmail.com',
      telefono: '999888777',
      rol: 'Administrador',
      estado: 'Inactivo'
    }

  ];

  //Ventana flotante

  abrirModal(tipo: string){

    this.tipoUsuario = tipo;

    this.mostrarModal = true;

    this.mostrarOpciones = false;

  }

  // FILTRO

  filtrarPorRol(rol: string) {

    this.filtroRol = rol;

  }

  get usuariosFiltrados() {

    return this.usuarios.filter(usuario => {

    const coincideTexto =
      usuario.nombre.toLowerCase().includes(this.buscador.toLowerCase()) ||
      usuario.correo.toLowerCase().includes(this.buscador.toLowerCase());

    const coincideRol =
      this.filtroRol === '' || usuario.rol === this.filtroRol;

    return coincideTexto && coincideRol;
  });

  }

  // CAMBIAR ESTADO

  cambiarEstado(usuario: any) {

    usuario.estado =
    usuario.estado === 'Activo'
    ? 'Inactivo'
    : 'Activo';

  }

  // ELIMINAR

  eliminarUsuario(correo: string) {

    this.usuarios =
    this.usuarios.filter(u => u.correo !== correo);

  }

  // EDITAR

  editarUsuario(usuario: any) {

    alert(
      'Editando usuario: ' + usuario.nombre
    );

  }

}