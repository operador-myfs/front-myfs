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

 
}
