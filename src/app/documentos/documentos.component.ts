import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-documentos',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.css'
})
export class DocumentosComponent {
 
  constructor() {}

  
  
}
