import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { UserProduct } from '../models/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  public typeList: string[] = [];
  public readonly filterByType$ = new BehaviorSubject(null);
  public saveType: string;

  constructor(
    api: ApiService
  ) {
    api.getProductList()
      .subscribe(e => {
        console.log(e.productsList);
        this.uniqueTypesArray(e.productsList);
      });
  }

  private uniqueTypesArray(arr: UserProduct[]): void {
    this.typeList = [...new Set(arr.reduce((acc, next) => {
      acc.push(next.type);
      return acc;
    }, []))
    ];
  }

}
