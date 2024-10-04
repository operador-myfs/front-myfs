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
import { ToastrService } from 'ngx-toastr';

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
  private toastr = inject(ToastrService);
  isLoading: boolean = false;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    idDocument: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required]),
  });

  register() {
    this.isLoading = true;
    const bodyRegister: DataRegister = {
      name: this.registerForm.value.email?.trim().split('@')[0],
      username: this.registerForm.value.email,
      cedula: this.registerForm.value.idDocument,
      address: this.registerForm.value.address
    };
    this.registerService.registerUser(bodyRegister).subscribe((res) => {
      this.router.navigate(['confirmation']);
      this.toastr.success('Your account has been created successfully');
      this.isLoading = false;

    }, error => {
      this.toastr.error('We could not create your account, please try again');
      this.isLoading = false;

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
