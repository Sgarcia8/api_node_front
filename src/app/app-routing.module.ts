import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
