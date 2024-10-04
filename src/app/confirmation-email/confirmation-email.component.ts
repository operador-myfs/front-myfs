import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { regexPassowrd } from '../utils/const';
import { ConfirmatioEmailService } from './confirmatio-email.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-confirmation-email',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './confirmation-email.component.html',
  styleUrl: './confirmation-email.component.css',
})
export class ConfirmationEmailComponent {
  public showPassword: boolean = false;
  private confirmationService = inject(ConfirmatioEmailService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  private loginService = inject(LoginService);
  isLoading: boolean = false;
  confirmationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(regexPassowrd),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.pattern(regexPassowrd),
    ]),
  });
  confirmationLogin() {
    this.isLoading = true;
    const bodyConfirmationLogin = {
      username: this.confirmationForm.value.email,
      password: this.confirmationForm.value.password,
      new_password: this.confirmationForm.value.confirmPassword,
    };
    
    this.confirmationService
      .confirmationEmail(bodyConfirmationLogin)
      .subscribe((data:any) => {
        this.isLoading = false;
        const idToken = data.id_token;
        this.loginService.setIdToken(idToken);
        sessionStorage.setItem('idToken', idToken);
        this.loginService.setLoggedIn(true);
        this.router.navigate(['/home']);

      },error => {
        this.toastr.error('We could not create your password, please try again');
        this.isLoading = false;

      });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  login() {
    this.router.navigate(['login']);
  }
}
