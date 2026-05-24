import { Routes } from '@angular/router';

import { Login } from './pages/login/login'

import { AdminLayout } from './core/layout/admin-layout/admin-layout';
import { ClienteLayout } from './core/layout/cliente-layout/cliente-layout';
import { TecnicoLayout } from './core/layout/tecnico-layout/tecnico-layout';

import { Dashboard } from './pages/administrador1/dashboard/dashboard';
import { ReportesClientes } from './pages/administrador1/reportes-clientes/reportes-clientes';
import { AsignacionTecnicos } from './pages/administrador1/asignacion-tecnicos/asignacion-tecnicos';
import { SeguimientoTicket } from './pages/administrador1/seguimiento-ticket/seguimiento-ticket';
import { Estadisticas } from './pages/administrador1/estadisticas/estadisticas';
import { GestionUsuarios } from './pages/administrador1/gestion-usuarios/gestion-usuarios';
import { Notificaciones as NotificacionesAdmin } from './pages/administrador1/notificaciones/notificaciones';
import { Pagos } from './pages/administrador1/pagos/pagos';
import { Devoluciones } from './pages/administrador1/devoluciones/devoluciones';
import { Configuracion } from './pages/administrador1/configuracion/configuracion';

// IMPORTAR COMPONENTES DE CLIENTE (páginas)
import { ClienteDashboard } from './pages/cliente/cliente/cliente-dashboard/cliente-dashboard';
import { GenerarReporte } from './pages/cliente/cliente/generar-reporte/generar-reporte';
import { EstadoSolicitudes } from './pages/cliente/cliente/estado-solicitudes/estado-solicitudes';
import { Notificaciones } from './pages/cliente/cliente/notificaciones/notificaciones';

// IMPORTAR COMPONENTES DE TECNICO (páginas)
import { OrdenesAsignadas } from './pages/tecnico/ordenes-asignadas/ordenes-asignadas';
import { Evaluaciones as EvaluacionEquipo } from './pages/tecnico/evaluacion-equipo/evaluacion-equipo';
import { Reparaciones as ReparacionesCurso } from './pages/tecnico/reparaciones-curso/reparaciones-curso';
import { PruebasFuncionamiento } from './pages/tecnico/pruebas-funcionamiento/pruebas-funcionamiento';

export const routes: Routes = [

  // LOGIN
  {
    path: '',
    component: Login
  },

  // ADMINISTRADOR
  {
    path: 'administrador',
    component: AdminLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: Dashboard },
      { path: 'reportes', component: ReportesClientes },
      { path: 'asignacion', component: AsignacionTecnicos },
      { path: 'seguimiento', component: SeguimientoTicket },
      { path: 'estadisticas', component: Estadisticas },
      { path: 'usuarios', component: GestionUsuarios },
      { path: 'notificaciones', component: NotificacionesAdmin },
      { path: 'pagos', component: Pagos },
      { path: 'devoluciones', component: Devoluciones },
      { path: 'configuracion', component: Configuracion }
    ]
  },

  // ==========================================
  // RUTAS DE CLIENTE
  // ==========================================
  {
    path: 'cliente',
    component: ClienteLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: ClienteDashboard },
      { path: 'generar-reporte', component: GenerarReporte },
      { path: 'estado-solicitudes', component: EstadoSolicitudes },
      { path: 'notificaciones', component: Notificaciones }
    ]
  },

  // ==========================================
  // RUTAS DE TECNICO
  // ==========================================
  {
    path: 'tecnico',
    component: TecnicoLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'ordenes-asignadas' },
      { path: 'ordenes-asignadas', component: OrdenesAsignadas },
      { path: 'evaluacion-equipo', component: EvaluacionEquipo },
      { path: 'reparaciones-curso', component: ReparacionesCurso },
      { path: 'pruebas-funcionamiento', component: PruebasFuncionamiento }
    ]
  },

  // REDIRECCION
  {
    path: '**',
    redirectTo: ''
  }
];