import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { regexPassowrd } from '../utils/const';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { DataRegister } from '../utils/interfaces';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public showPassword: boolean = false;
  private router = inject(Router);
  private registerService = inject(RegisterService);
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  register() {
    const bodyRegister: DataRegister = {
      email: this.registerForm.value.email,
      name: this.registerForm.value.email?.trim().split('@')[0],
      username: this.registerForm.value.email,
    };
    this.registerService.registerUser(bodyRegister).subscribe((res) => {
    
    });
  }
  login() {
    this.router.navigate(['login']);
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  resetForm(): void {
    this.registerForm.reset();
  }
}
