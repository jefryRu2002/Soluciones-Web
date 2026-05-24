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

  usuarios = [

    {
      id: 1,
      nombre: 'Juan Pérez',
      correo: 'juan@gmail.com',
      rol: 'Cliente',
      estado: 'Activo'
    },

    {
      id: 2,
      nombre: 'Carlos Ramos',
      correo: 'carlos@gmail.com',
      rol: 'Técnico',
      estado: 'Activo'
    },

    {
      id: 3,
      nombre: 'María López',
      correo: 'maria@gmail.com',
      rol: 'Administrador',
      estado: 'Inactivo'
    }

  ];

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

  }

  // CAMBIAR ESTADO

  cambiarEstado(usuario: any) {

    usuario.estado =
    usuario.estado === 'Activo'
    ? 'Inactivo'
    : 'Activo';

  }

  // ELIMINAR

  eliminarUsuario(id: number) {

    this.usuarios =
    this.usuarios.filter(u => u.id !== id);

  }

  // EDITAR

  editarUsuario(usuario: any) {

    alert(
      'Editando usuario: ' + usuario.nombre
    );

  }

}