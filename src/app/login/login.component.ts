import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DataLogin } from '../utils/interfaces';
import { regexPassowrd } from '../utils/const';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { signal } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private authService = inject(AuthService);
  public showPassword: boolean = false;
  private toastr = inject(ToastrService);
  isLoading: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(regexPassowrd),
    ]),
  });

  constructor(private router: Router) {}
  login(): void {
    if (this.loginForm.valid) {
      const dataLogin: DataLogin = {
        username: this.loginForm.value.email?.toLowerCase(),
        password: this.loginForm.value.password,
      };
      this.isLoading = true;
      this.loginService.loginFirstTime(dataLogin).subscribe(
        (data: any) => {
          const idToken = data.id_token;
          this.loginService.setIdToken(idToken);
          sessionStorage.setItem('idToken', idToken);
          this.loginService.setLoggedIn(true);
          this.router.navigate(['home']);
          this.isLoading = false;
        },
        (error) => {
          if (error.error.status === 422) {
            this.router.navigate(['confirmation']);
            this.isLoading = false;

          }
          if (error.error.status === 500) {
            this.toastr.error('We could not log you in, please try again');
            this.isLoading = false;

          }
          if(error.error.status === 400){
            this.toastr.error('Invalid user credentials');
            this.isLoading = false;

          }
        }
      );
    }
  }
  restorePassword() {
    this.router.navigate(['restore-password']);
  }
  register() {
    this.router.navigate(['register']);
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  resetForm(): void {
    this.loginForm.reset();
  }
}
