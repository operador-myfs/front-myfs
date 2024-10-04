import {  Component, inject, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.css',
})
export class TransfersComponent implements OnInit {
  private toastr = inject(ToastrService);

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
    this.transferService.obtenerOperadores().subscribe((data: any) => {
      this.isLoading = false;
      this.operadores = data.body
    },error=> {
      this.isLoading = false;
      this.toastr.error('An error occurred while trying to get the operators'); 
    });
  }
  transfer() {
    console.log(this.transferOperator.value);
  }
}
