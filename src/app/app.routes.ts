import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Administrador } from './pages/administrador/administrador';
import { AdminLayout } from './core/layout/admin-layout/admin-layout';

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

      {
        path: 'dashboard',
        component: Administrador
      }

    ]
  },

  // REDIRECCION
  {
    path: '**',
    redirectTo: ''
  }

];