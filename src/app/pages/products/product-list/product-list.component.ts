import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { UserProduct } from '../models/product-list.model';
import { filterProducts } from '../services/filter.function';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public productList: Observable<UserProduct[]>;
  private list: UserProduct[];
  private unsubscribe$ = new Subject();

  constructor(
    private api: ApiService,
    private filterService: FilterService,
    private router: Router,
  ) {
    filterService.filterByType$.pipe(
      filter(e => !!e),
      takeUntil(this.unsubscribe$)
    ).subscribe(e => this.filterByType(e));
  }

  public navigate(id: string | number): void {
    this.router.navigate(['products/details/', id]);
  }

  public filterByType(type: string): void {
    if (type === 'reset') {
      this.productList = of(this.list);
    } else {
      this.productList = filterProducts.call(this, type);
    }
  }

  private setProducts(list: UserProduct[]): Observable<UserProduct[]> {
    return this.productList = of(list);
  }

  ngOnInit(): void {
    this.api.getProductList()
      .subscribe(e => {
        console.log(e.productsList);
        this.filterService.saveType ? this.filterByType(this.filterService.saveType) : this.setProducts(e.productsList);
        this.list = e.productsList;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
