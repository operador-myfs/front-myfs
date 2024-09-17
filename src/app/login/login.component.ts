import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataLogin } from '../utils/interfaces';
import { regexPassowrd } from '../utils/const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private authService = inject(AuthService);
  public showPassword: boolean = false;
  logprimaryrm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(regexPassowrd)])

  })

  constructor(private router: Router) {

  }
  login(): void {
    const dataLogin: DataLogin = {
      email: this.logprimaryrm.value.email?.toLowerCase(),
      password: this.logprimaryrm.value.password
    }
    this.loginService.setLoggedIn(true);
    this.router.navigate(['home'])
    this.resetForm();
  }
  restorePassword() {
    alert('Alert')
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  resetForm(): void {
    this.logprimaryrm.reset();
  }
  
}
