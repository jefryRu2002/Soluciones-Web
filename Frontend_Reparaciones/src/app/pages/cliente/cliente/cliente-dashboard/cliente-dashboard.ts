import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-dashboard.html',
  styleUrls: ['./cliente-dashboard.css']
})
export class ClienteDashboard implements OnInit {

  nombreCliente = 'Cargando...';
  emailCliente = '';
  telefonoCliente = '';

  resumen = [
    { label: 'Solicitudes activas', value: 0, icono: '🔧', color: 'azul' },
    { label: 'En espera de pago',   value: 0, icono: '💳', color: 'amarillo' },
    { label: 'Equipos entregados',  value: 0, icono: '✅', color: 'verde' },
  ];

  solicitudesRecientes: any[] = [];
  notificacionesNoLeidas = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cargarDatosIniciales();
    this.cargarClienteActual();
    this.actualizarDashboard();
  }

  cargarDatosIniciales(): void {
    if (!localStorage.getItem('solicitudes_cliente')) {
      const solicitudesIniciales = [
        {
          id: '1', codigo: 'REP-001', equipo: 'Laptop HP', modelo: 'Pavilion 15',
          serie: 'HP-12345', falla: 'No enciende, no muestra imagen',
          estado: 'En Proceso', fecha: new Date('2026-05-20').toISOString(), pago: 'pendiente'
        },
        {
          id: '2', codigo: 'REP-002', equipo: 'iPhone 13', modelo: 'A2487',
          serie: 'IP-67890', falla: 'Pantalla rota, no responde',
          estado: 'Pendiente', fecha: new Date('2026-05-21').toISOString(), pago: 'pagado'
        },
        {
          id: '3', codigo: 'REP-003', equipo: 'PC Gamer', modelo: 'RTX 3060',
          serie: 'PC-11111', falla: 'Sobrecalentamiento, se apaga solo',
          estado: 'Terminado', fecha: new Date('2026-05-18').toISOString(), pago: 'pagado'
        }
      ];
      localStorage.setItem('solicitudes_cliente', JSON.stringify(solicitudesIniciales));
    }

    if (!localStorage.getItem('clienteActual')) {
      localStorage.setItem('clienteActual', JSON.stringify({
        nombre: 'Juan Pérez', email: 'cliente@test.com',
        telefono: '999999999', dni: '12345678'
      }));
    }
  }

  cargarClienteActual(): void {
    const cliente = localStorage.getItem('clienteActual');
    if (cliente) {
      const data = JSON.parse(cliente);
      this.nombreCliente   = data.nombre   || 'Cliente';
      this.emailCliente    = data.email    || '';
      this.telefonoCliente = data.telefono || '';
    }
  }

  actualizarDashboard(): void {
    this.cargarSolicitudes();
    this.actualizarResumen();
    this.cargarNotificaciones();
  }

  cargarSolicitudes(): void {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes_cliente') || '[]');
    this.solicitudesRecientes = [...solicitudes]
      .sort((a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
      .slice(0, 3);
  }

  actualizarResumen(): void {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes_cliente') || '[]');
    this.resumen[0].value = solicitudes.filter((s: any) =>
      s.estado !== 'Terminado' && s.estado !== 'Devuelto' && s.estado !== 'Entregado'
    ).length;
    this.resumen[1].value = solicitudes.filter((s: any) => s.pago === 'pendiente').length;
    this.resumen[2].value = solicitudes.filter((s: any) =>
      s.estado === 'Terminado' || s.estado === 'Entregado'
    ).length;
  }

  cargarNotificaciones(): void {
    const notificaciones = JSON.parse(localStorage.getItem('notificaciones_cliente') || '[]');
    this.notificacionesNoLeidas = notificaciones.filter((n: any) => !n.leida).length;
  }

  getEstadoClass(estado: string): string {
    const clases: Record<string, string> = {
      'Pendiente':  'pendiente',
      'En Proceso': 'proceso',
      'Terminado':  'terminado',
      'Devuelto':   'devuelto',
      'Entregado':  'terminado'
    };
    return clases[estado] || 'pendiente';
  }

  getFechaFormateada(fechaISO: string): string {
    return new Date(fechaISO).toLocaleDateString('es-ES');
  }

  // NAVEGACIÓN
  irAGenerarReporte(): void    { this.router.navigate(['/cliente/generar-reporte']); }
  irAEstadoSolicitudes(): void { this.router.navigate(['/cliente/estado-solicitudes']); }
  irANotificaciones(): void    { this.router.navigate(['/cliente/notificaciones']); }
  irAMiPerfil(): void          { this.router.navigate(['/cliente/perfil']); }
  irPagos(): void {this.router.navigate(['/cliente/pagos']);}
  cerrarSesion(): void {
    localStorage.removeItem('clienteActual');
    this.router.navigate(['/']);
  }
}