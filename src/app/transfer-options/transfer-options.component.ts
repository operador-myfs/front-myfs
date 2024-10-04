import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferService } from '../transfers/transfer.service';

@Component({
  selector: 'app-transfer-options',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './transfer-options.component.html',
  styleUrl: './transfer-options.component.css'
})
export class TransferOptionsComponent {

  // transferService = inject(TransferService);
  // operadores: any = [];


  // cargarOperadores() {
  //   this.obtenerOperadores();
  // }

  // obtenerOperadores() {
  //   // this.isLoading = true;
  //   this.transferService.obtenerOperadores().subscribe((data: any) => {
  //     this.operadores = data.filter((operador: any) => operador.transferAPIURL);
  //     console.log(this.operadores)
  //   });
  // }
}
