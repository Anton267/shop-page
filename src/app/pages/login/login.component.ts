import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      email: ['user@email.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required, , Validators.minLength(6)]],
    });
  }

  public login(): void {
    const body = {
      user: {
        email: this.email.value,
        password: this.password.value,
      }
    };
    this.auth.login(body).subscribe(
      e => {
        if (e) {
          this.router.navigateByUrl('/products');
        }
      }
    );
  }

  public get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  public get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}

