import { Component } from '@angular/core';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {

  constructor(
    public filterService: FilterService
  ) { }

  public filterByType(type: string): void {
    this.filterService.filterByType$.next(type);
  }
}
