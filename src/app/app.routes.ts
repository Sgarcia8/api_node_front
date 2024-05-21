import { Routes } from '@angular/router';
import {ProductosVistaComponent} from './components/productos-vista/productos-vista.component'

export const routes: Routes = [
  {
    path: 'productos',
    component: ProductosVistaComponent
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  }
];
