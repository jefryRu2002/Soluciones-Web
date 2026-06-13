// pages/configuracion/configuracion.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type RolUsuario = 'cliente' | 'tecnico';
export type VistaConfig = 'usuarios' | 'tecnicos' | 'perfil';

export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: RolUsuario;
  activo: boolean;
  fechaRegistro: string;
}

export interface NuevoTecnico {
  nombre: string;
  correo: string;
  usuario: string;
  password: string;
  confirmarPassword: string;
}

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.css']
})
export class Configuracion {

  vistaActual: VistaConfig = 'usuarios';
  buscador = '';

  // ── USUARIOS ─────────────────────────────────────
  usuarios = signal<Usuario[]>([
    { id: 1, nombre: 'Juan Pérez',    correo: 'juan@mail.com',    rol: 'cliente',  activo: true,  fechaRegistro: '01/05/2026' },
    { id: 2, nombre: 'María López',   correo: 'maria@mail.com',   rol: 'cliente',  activo: true,  fechaRegistro: '05/05/2026' },
    { id: 3, nombre: 'José Ramos',    correo: 'jose@mail.com',    rol: 'cliente',  activo: false, fechaRegistro: '10/05/2026' },
    { id: 4, nombre: 'Carlos Torres', correo: 'carlos@tec.com',   rol: 'tecnico',  activo: true,  fechaRegistro: '01/01/2026' },
    { id: 5, nombre: 'Luis Vargas',   correo: 'luis@tec.com',     rol: 'tecnico',  activo: true,  fechaRegistro: '01/01/2026' },
    { id: 6, nombre: 'Pedro Sánchez', correo: 'pedro@tec.com',    rol: 'tecnico',  activo: false, fechaRegistro: '15/03/2026' },
  ]);

  usuariosFiltrados = computed(() => {
    const q = this.buscador.toLowerCase();
    return this.usuarios().filter(u =>
      u.nombre.toLowerCase().includes(q) ||
      u.correo.toLowerCase().includes(q)
    );
  });

  totalClientes  = computed(() => this.usuarios().filter(u => u.rol === 'cliente').length);
  totalTecnicos  = computed(() => this.usuarios().filter(u => u.rol === 'tecnico').length);
  totalInactivos = computed(() => this.usuarios().filter(u => !u.activo).length);

  toggleUsuario(id: number): void {
    this.usuarios.update(lista =>
      lista.map(u => u.id === id ? { ...u, activo: !u.activo } : u)
    );
  }

  eliminarUsuario(id: number): void {
    if (!confirm('¿Estás seguro de eliminar este usuario?')) return;
    this.usuarios.update(lista => lista.filter(u => u.id !== id));
  }

  // ── NUEVO TÉCNICO ─────────────────────────────────
  nuevoTecnico: NuevoTecnico = {
    nombre: '',
    correo: '',
    usuario: '',
    password: '',
    confirmarPassword: ''
  };

  mostrarPassword = false;
  tecnicoRegistrado = false;
  errorRegistro = '';

  registrarTecnico(): void {
    this.errorRegistro = '';

    if (!this.nuevoTecnico.nombre || !this.nuevoTecnico.correo ||
        !this.nuevoTecnico.usuario || !this.nuevoTecnico.password) {
      this.errorRegistro = 'Todos los campos son obligatorios.';
      return;
    }

    if (this.nuevoTecnico.password !== this.nuevoTecnico.confirmarPassword) {
      this.errorRegistro = 'Las contraseñas no coinciden.';
      return;
    }

    if (this.nuevoTecnico.password.length < 6) {
      this.errorRegistro = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    const correoExiste = this.usuarios().some(
      u => u.correo === this.nuevoTecnico.correo
    );

    if (correoExiste) {
      this.errorRegistro = 'Ya existe un usuario con ese correo.';
      return;
    }

    // Agregar técnico a la lista
    const nuevoId = Math.max(...this.usuarios().map(u => u.id)) + 1;
    this.usuarios.update(lista => [...lista, {
      id: nuevoId,
      nombre: this.nuevoTecnico.nombre,
      correo: this.nuevoTecnico.correo,
      rol: 'tecnico',
      activo: true,
      fechaRegistro: new Date().toLocaleDateString('es-PE')
    }]);

    // Limpiar formulario
    this.nuevoTecnico = {
      nombre: '',
      correo: '',
      usuario: '',
      password: '',
      confirmarPassword: ''
    };

    this.tecnicoRegistrado = true;
    setTimeout(() => this.tecnicoRegistrado = false, 3000);
  }

  // ── PERFIL ADMIN ──────────────────────────────────
  perfilAdmin = {
    nombre: 'Administrador',
    correo: 'admin@sistema.com',
    passwordActual: '',
    passwordNueva: '',
    confirmarNueva: ''
  };

  perfilGuardado = false;
  errorPerfil = '';

  guardarPerfil(): void {
    this.errorPerfil = '';

    if (!this.perfilAdmin.nombre || !this.perfilAdmin.correo) {
      this.errorPerfil = 'Nombre y correo son obligatorios.';
      return;
    }

    if (this.perfilAdmin.passwordNueva) {
      if (!this.perfilAdmin.passwordActual) {
        this.errorPerfil = 'Ingresa tu contraseña actual.';
        return;
      }
      if (this.perfilAdmin.passwordNueva !== this.perfilAdmin.confirmarNueva) {
        this.errorPerfil = 'Las contraseñas nuevas no coinciden.';
        return;
      }
      if (this.perfilAdmin.passwordNueva.length < 6) {
        this.errorPerfil = 'La contraseña debe tener al menos 6 caracteres.';
        return;
      }
    }

    this.perfilAdmin.passwordActual = '';
    this.perfilAdmin.passwordNueva = '';
    this.perfilAdmin.confirmarNueva = '';

    this.perfilGuardado = true;
    setTimeout(() => this.perfilGuardado = false, 3000);
  }
}