import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'crear',
  },
  {
    path: 'crear',
    loadComponent: () =>
      import('./crear/crear.component').then(
        (c) => c.CrearComponent
      ),
    title: 'Crear alarma'
  },
  {
    path: 'listar',
    loadComponent: () =>
      import('./listar/listar.component').then(
        (c) => c.ListarComponent
      ),
    title: 'Listado de alarmas'
  },
  {
    path: 'historial',
    loadComponent: () =>
      import('./historial/table.component').then(
        (c) => c.HistorialComponent
      ),
    title: 'Historial'
  },
  {
    path: 'estadisticas',
    loadComponent: () =>
      import('./estadisticas/estadisticas.component').then(
        (c) => c.EstadisticasComponent
      ),
    title: 'Estadisticas'
  },

];