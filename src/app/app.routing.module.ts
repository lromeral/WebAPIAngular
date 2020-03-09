import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './init/home/home.component';
import { NotFoundComponent } from './init/not-found/not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginComponent } from './init/login/login.component';
  
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule), canActivate: [AuthGuard]},
  // { path: 'productos', loadChildren: './productos/productos.module#ProductosModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
