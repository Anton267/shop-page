import { Observable, throwError, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserProduct } from '../models/product-list.model';

export function filterProducts(type: string): Observable<UserProduct[]> {
    const filteredList = (list: UserProduct[]): UserProduct[] => {
        return list.reduce((acc, next) => {
            if (next.type === type) {
                acc.push(next);
            }
            return acc;
        }, []);
    };
    const chekList = (list: UserProduct[]): Observable<UserProduct[]> => {
        if (!list) {
            setTimeout(() => this.productList = filterProducts(type), 100);
            return throwError('Error!');
        } else {
            return of(list);
        }
    };

    return of(this).pipe(
        map(that => that ? filteredList(that.list) : null),
        switchMap(list => chekList(list)),
        catchError(err => {
            console.warn(err);
            return of(null);
        })
    );
}
