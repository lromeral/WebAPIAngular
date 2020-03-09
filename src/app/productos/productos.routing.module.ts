import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ProductosComponent,
    children: [
      { path: '', redirectTo: '/productos/crud-productos', pathMatch: 'full' },
      { path: 'crud-productos', component: CrudProductosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule {}
export const routingComponents = [ProductosComponent, CrudProductosComponent];