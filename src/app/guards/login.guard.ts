import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  canActivate(): Observable<boolean> {
    return of(!this.auth.isLoggedIn()).pipe(
      tap(e => {
        if (!e) {
          this.router.navigateByUrl('/products');
        }
      })
    );
  }
}

