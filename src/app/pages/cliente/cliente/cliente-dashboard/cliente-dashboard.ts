import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';  // ← Agrega Router

@Component({
  selector: 'app-cliente-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-dashboard.html',
  styleUrls: ['./cliente-dashboard.css']
})
export class ClienteDashboard implements OnInit {

  nombreCliente = 'Juan Pérez';
  emailCliente = 'cliente@test.com';
  telefonoCliente = '999999999';

  resumen = [
    { label: 'Solicitudes activas', value: 0, icono: '🔧', color: 'azul' },
    { label: 'En espera de pago',   value: 0, icono: '💳', color: 'amarillo' },
    { label: 'Equipos entregados',  value: 0, icono: '✅', color: 'verde' },
  ];

  solicitudesRecientes: any[] = [];
  notificacionesNoLeidas = 0;
  notificaciones: any[] = [];

  constructor(private router: Router) {  // ← Inyecta Router
    this.cargarDatosIniciales();
  }

  ngOnInit() {
    this.cargarClienteActual();
    this.actualizarDashboard();
  }

  // ==================== INICIALIZACIÓN ====================

  cargarDatosIniciales() {
    if (!localStorage.getItem('solicitudes')) {
      const solicitudesIniciales = [
        { 
          id: '1',
          codigo: 'TK-001', 
          equipo: 'Laptop HP', 
          modelo: 'Pavilion 15',
          serie: 'HP-12345',
          falla: 'No enciende',
          estado: 'En Proceso', 
          fecha: '20/05/2026',
          pago: 'pendiente'
        },
        { 
          id: '2',
          codigo: 'TK-002', 
          equipo: 'iPhone 13', 
          modelo: 'A2487',
          serie: 'IP-67890',
          falla: 'Pantalla rota',
          estado: 'Pendiente', 
          fecha: '21/05/2026',
          pago: 'pagado'
        },
        { 
          id: '3',
          codigo: 'TK-003', 
          equipo: 'PC Gamer', 
          modelo: 'RTX 3060',
          serie: 'PC-11111',
          falla: 'Sobrecalentamiento',
          estado: 'Terminado', 
          fecha: '18/05/2026',
          pago: 'pagado'
        }
      ];
      localStorage.setItem('solicitudes', JSON.stringify(solicitudesIniciales));
    }

    if (!localStorage.getItem('notificaciones')) {
      const notificacionesIniciales = [
        { id: '1', titulo: 'Solicitud recibida', mensaje: 'Tu solicitud TK-001 ha sido recibida', fecha: new Date().toISOString(), leida: false, tipo: 'info' },
        { id: '2', titulo: 'Actualización de estado', mensaje: 'Tu equipo TK-002 está en diagnóstico', fecha: new Date().toISOString(), leida: false, tipo: 'success' }
      ];
      localStorage.setItem('notificaciones', JSON.stringify(notificacionesIniciales));
    }

    if (!localStorage.getItem('clienteActual')) {
      localStorage.setItem('clienteActual', JSON.stringify({
        nombre: 'Juan Pérez',
        email: 'cliente@test.com',
        telefono: '999999999',
        dni: '12345678'
      }));
    }
  }

  cargarClienteActual() {
    const cliente = localStorage.getItem('clienteActual');
    if (cliente) {
      const data = JSON.parse(cliente);
      this.nombreCliente = data.nombre;
      this.emailCliente = data.email;
      this.telefonoCliente = data.telefono;
    }
  }

  actualizarDashboard() {
    this.cargarSolicitudes();
    this.cargarNotificaciones();
    this.actualizarResumen();
  }

  cargarSolicitudes() {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes') || '[]');
    this.solicitudesRecientes = solicitudes.slice(0, 3);
  }

  actualizarResumen() {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes') || '[]');
    
    this.resumen[0].value = solicitudes.filter((s: any) => 
      s.estado !== 'Terminado' && s.estado !== 'Devuelto'
    ).length;
    
    this.resumen[1].value = solicitudes.filter((s: any) => 
      s.pago === 'pendiente'
    ).length;
    
    this.resumen[2].value = solicitudes.filter((s: any) => 
      s.estado === 'Terminado'
    ).length;
  }

  cargarNotificaciones() {
    const notificaciones = JSON.parse(localStorage.getItem('notificaciones') || '[]');
    this.notificaciones = notificaciones;
    this.notificacionesNoLeidas = notificaciones.filter((n: any) => !n.leida).length;
  }

  agregarNotificacion(titulo: string, mensaje: string, tipo: string = 'info') {
    const notificaciones = JSON.parse(localStorage.getItem('notificaciones') || '[]');
    const nueva = {
      id: Date.now().toString(),
      titulo,
      mensaje,
      fecha: new Date().toISOString(),
      leida: false,
      tipo
    };
    notificaciones.unshift(nueva);
    localStorage.setItem('notificaciones', JSON.stringify(notificaciones));
    this.cargarNotificaciones();
  }

  getEstadoClass(estado: string): string {
    const clases: Record<string, string> = {
      'Pendiente': 'pendiente',
      'En Proceso': 'proceso',
      'Terminado': 'terminado',
      'Devuelto': 'devuelto'
    };
    return clases[estado] || 'pendiente';
  }

  // ==================== MÉTODOS DE NAVEGACIÓN ====================
  
  irAGenerarReporte() {
    this.router.navigate(['/cliente/generar-reporte']);
  }

  irAEstadoSolicitudes() {
    this.router.navigate(['/cliente/estado-solicitudes']);
  }

  irANotificaciones() {
    this.router.navigate(['/cliente/notificaciones']);
  }

  cerrarSesion() {
    localStorage.removeItem('clienteActual');
    this.router.navigate(['/login']);
  }
}