import { Routes } from '@angular/router';

import { Login } from './pages/login/login';

import { AdminLayout } from './core/layout/admin-layout/admin-layout';
import { ClienteLayout } from './core/layout/cliente-layout/cliente-layout';
import { TecnicoLayout } from './core/layout/tecnico-layout/tecnico-layout';

import { Dashboard } from './pages/administrador1/dashboard/dashboard';
import { ReportesClientes } from './pages/administrador1/reportes-clientes/reportes-clientes';
import { AsignacionTecnicos } from './pages/administrador1/asignacion-tecnicos/asignacion-tecnicos';
import { SeguimientoTicket } from './pages/administrador1/seguimiento-ticket/seguimiento-ticket';
import { Estadisticas } from './pages/administrador1/estadisticas/estadisticas';
import { GestionUsuarios } from './pages/administrador1/gestion-usuarios/gestion-usuarios';
import { NotificacionesAdmin  } from './pages/administrador1/notificaciones/notificaciones';
import { Devoluciones } from './pages/administrador1/devoluciones/devoluciones';
import { Gestion_Pagos } from './pages/administrador1/gestion-pagos/gestion-pagos'; // <--- Importado correctamente
import { Configuracion } from './pages/administrador1/configuracion/configuracion';
import { Tickets } from './pages/administrador1/tickets/tickets';
import { OrdenTrabajo } from './pages/administrador1/orden-trabajo/orden-trabajo';

// IMPORTAR COMPONENTES DE CLIENTE (páginas)
import { ClienteDashboard } from './pages/cliente/cliente/cliente-dashboard/cliente-dashboard';
import { GenerarReporte } from './pages/cliente/cliente/generar-reporte/generar-reporte';
import { EstadoSolicitudes } from './pages/cliente/cliente/estado-solicitudes/estado-solicitudes';
import { Notificaciones } from './pages/cliente/cliente/notificaciones/notificaciones';
import { Pagos } from './pages/cliente/cliente/pagos/pagos';
import { ClientePerfil } from './pages/cliente/cliente/cliente/cliente';

// IMPORTAR COMPONENTES DE TECNICO (páginas)
import { OrdenesAsignadas } from './pages/tecnico/ordenes-asignadas/ordenes-asignadas';
import { Evaluaciones as EvaluacionEquipo } from './pages/tecnico/evaluacion-equipo/evaluacion-equipo';
import { Reparaciones as ReparacionesCurso } from './pages/tecnico/reparaciones-curso/reparaciones-curso';
import { PruebasFuncionamiento } from './pages/tecnico/pruebas-funcionamiento/pruebas-funcionamiento';
import { Registrarusuario } from './pages/registrarusuario/registrarusuario';
import { Olvidocontrasena } from './pages/olvidocontrasena/olvidocontrasena';

export const routes: Routes = [

    // LOGIN
    {
        path: '',
        component: Login
    },

    // REGISTRO
    {
        path: 'registrarusuario',
        component: Registrarusuario
    },

    // OLVIDO CONTRASEÑA
    {
        path: 'olvidocontrasena',
        component: Olvidocontrasena
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
            { path: 'gestion-pagos', component: Gestion_Pagos }, // <--- CORREGIDO: Con comas y el componente de Admin
            { path: 'notificaciones', component: NotificacionesAdmin },
            { path: 'devoluciones', component: Devoluciones },
            { path: 'configuracion', component: Configuracion },
            { path: 'tickets', component: Tickets},
            { path:'orden-trabajo', component: OrdenTrabajo}
        ]
    },

    // RUTAS DE CLIENTE
    {
        path: 'cliente',
        component: ClienteLayout,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: ClienteDashboard },
            { path: 'generar-reporte', component: GenerarReporte },
            { path: 'estado-solicitudes', component: EstadoSolicitudes },
            { path: 'pagos', component: Pagos },
            { path: 'notificaciones', component: Notificaciones },
            { path: 'perfil', component: ClientePerfil }
        ]
    },

    // RUTAS DE TECNICO
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

    // REDIRECCION (siempre al final)
    {
        path: '**',
        redirectTo: ''
    }
];