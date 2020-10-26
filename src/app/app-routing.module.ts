import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [LoginGuard]
  },
  {
    path: 'products', loadChildren: () => import('./pages/products/products.module')
      .then(m => m.ProductsModule)
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
