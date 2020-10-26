import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl = environment.baseUrl;
  private JWT_TOKEN: string;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  public login(user: User): Observable<boolean> {
    return this.http.get<User>(`${this.baseUrl}users.json`)
      .pipe(
        map(userData => userData.user),
        tap(({ token }) => this.setToken(token)),
        map(userData => {
          const userRequestEmail = user.user.email;
          const userRequestpassword = user.user.password;
          const userResponseEmail = userData.email;
          const userResponsepassword = userData.password;
          const isLogged = userRequestEmail === userResponseEmail &&
            userRequestpassword === userResponsepassword;
          return isLogged;
        }),
        map(isLogged => {
          if (!isLogged) {
            throw new Error('User email or password invalid');
          }
          return isLogged;
        }),
        catchError(error => {
          console.error(error);
          this.removeToken();
          this.toastr.error(error, 'Error');
          return of(false);
        })
      );
  }

  public logout(): Observable<boolean> {
    return of(true).pipe(
      tap(() => this.removeToken())
    );
  }

  public getToken(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private removeToken(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
