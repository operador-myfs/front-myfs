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
    const bodyConfirmationLogin = {
      username: this.confirmationForm.value.email,
      password: this.confirmationForm.value.password,
      new_password: this.confirmationForm.value.confirmPassword,
    };
    
    this.confirmationService
      .confirmationEmail(bodyConfirmationLogin)
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['/home']);

      });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
