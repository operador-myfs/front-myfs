import { Component, inject, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataTransfer } from '../utils/interfaces';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.css',
})
export class TransfersComponent implements OnInit {
  private toastr = inject(ToastrService);
  private router = inject(Router);
  private loginService = inject(LoginService);
  operadores: any = [];
  transferService = inject(TransferService);
  isLoading: boolean = false;

  transferOperator = new FormGroup({
    operator: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.isLoading = true;
    this.obtenerOperadores();
  }
  obtenerOperadores() {
    this.isLoading = true;
    this.transferService.obtenerOperadores().subscribe(
      (data: any) => {
        this.isLoading = false;
        this.operadores = data.body;
      },
      (error) => {
        this.isLoading = false;
        this.toastr.error(
          'An error occurred while trying to get the operators'
        );
      }
    );
  }
  transfer() {
    this.isLoading = true;
    const body: DataTransfer = {
      transferAPIURL: this.transferOperator.value.operator,
    };
    this.transferService.transferrence(body).subscribe(
      (data: any) => {
        this.isLoading = false;
        this.toastr.success('Transfer made successfully');
        this.loginService.setLoggedIn(false);
        if (sessionStorage.getItem('userSession')) {
          sessionStorage.removeItem('userSession');
        }
        if (sessionStorage.getItem('idToken')) {
          sessionStorage.removeItem('idToken');
        }
        if (sessionStorage.getItem('access_token')) {
          sessionStorage.removeItem('access_token');
        }
        this.router.navigate(['login']);
      },
      (error) => {
        this.isLoading = false;
        this.toastr.error(
          'An error occurred while trying to make the transfer'
        );
      }
    );
  }
}
