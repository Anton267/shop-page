import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NavComponent } from './nav/nav.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { BigCardComponent } from './big-card/big-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    NavComponent,
    SmallCardComponent,
    BigCardComponent,
    ProductListComponent,
    SimilarProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }

