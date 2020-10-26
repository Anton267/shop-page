import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserProduct } from '../models/product-list.model';
import { filterProducts } from '../services/filter.function';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.sass']
})
export class SimilarProductsComponent implements OnInit {

  @Input() private type: string;
  public productList: Observable<UserProduct[]>;
  private list: UserProduct[];

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  public navigate(id: string | number): void {
    this.router.navigate(['products/details/', id]);
    document.querySelector('.products-router-container').scrollTo(0, 0);
  }

  ngOnInit(): void {
    this.api.getProductList()
      .subscribe(e => {
        console.log(e.productsList);
        this.list = e.productsList;
        this.productList = filterProducts.call(this, this.type);
      });
  }

}
