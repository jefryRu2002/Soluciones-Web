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

<<<<<<< HEAD
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
=======
  usuarios = [

    {
      id: 1,
      nombre: 'Juan Pérez',
      correo: 'juan@gmail.com',
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4
      rol: 'Cliente',
      estado: 'Activo'
    },

    {
<<<<<<< HEAD
      nombre: 'Carlos',
      apellido: 'Ramos',
      correo: 'carlos@gmail.com',
      telefono: '912345678',
      especialidad: 'Hardware',
      nivel: 'Senior',
      sueldo: 2500,
=======
      id: 2,
      nombre: 'Carlos Ramos',
      correo: 'carlos@gmail.com',
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4
      rol: 'Técnico',
      estado: 'Activo'
    },

    {
<<<<<<< HEAD
      nombre: 'María',
      apellido: 'López',
      correo: 'maria@gmail.com',
      telefono: '999888777',
=======
      id: 3,
      nombre: 'María López',
      correo: 'maria@gmail.com',
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4
      rol: 'Administrador',
      estado: 'Inactivo'
    }

  ];

<<<<<<< HEAD
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
=======
  // FILTRO

  get usuariosFiltrados() {

    return this.usuarios.filter(usuario =>

      usuario.nombre
      .toLowerCase()
      .includes(this.buscador.toLowerCase())

      ||

      usuario.correo
      .toLowerCase()
      .includes(this.buscador.toLowerCase())

    );
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4

  }

  // CAMBIAR ESTADO

  cambiarEstado(usuario: any) {

    usuario.estado =
    usuario.estado === 'Activo'
    ? 'Inactivo'
    : 'Activo';

  }

  // ELIMINAR

<<<<<<< HEAD
  eliminarUsuario(correo: string) {

    this.usuarios =
    this.usuarios.filter(u => u.correo !== correo);
=======
  eliminarUsuario(id: number) {

    this.usuarios =
    this.usuarios.filter(u => u.id !== id);
>>>>>>> b8d8e01aecd5ca58ea5921e2c2b744f81ed431c4

  }

  // EDITAR

  editarUsuario(usuario: any) {

    alert(
      'Editando usuario: ' + usuario.nombre
    );

  }

}