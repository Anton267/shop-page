import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BigCardComponent } from './big-card/big-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'details/:id', component: BigCardComponent, pathMatch: 'prefix'
      },
      {
        path: '', component: ProductListComponent, pathMatch: 'prefix'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
