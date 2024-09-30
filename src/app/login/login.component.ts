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
import { error } from 'console';

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
      this.loginService.loginFirstTime(dataLogin).subscribe((data: any) => {
          this.loginService.setLoggedIn(true);
          this.router.navigate(['home']);
      }, error => {
        if(error.error.status === 400 && error.error.message === 'A new password is required but not provided'){
          this.router.navigate(['confirmation']);
        }
      });
    }
    this.resetForm();
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
