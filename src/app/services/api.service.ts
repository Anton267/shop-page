import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserProduct } from '../pages/products/models/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  public getProductList(): Observable<ProductList> {
    return this.http.get<ProductList>(`${this.baseUrl}products.json`)
      .pipe(
        catchError(error => {
          console.error(error);
          this.toastr.error(error, 'Error');
          return of(null);
        })
      );
  }

  public getProductById(id: number): Observable<UserProduct> {
    return this.http.get<ProductList>(`${this.baseUrl}products.json`)
      .pipe(
        map(({ productsList }) => productsList.find(item => item.id === id)),
        catchError(error => {
          console.error(error);
          this.toastr.error(error, 'Error');
          return of(null);
        })
      );
  }

}
