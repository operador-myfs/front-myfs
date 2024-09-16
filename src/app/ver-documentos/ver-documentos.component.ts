import { Component, inject } from '@angular/core';
import { VerDocumentosService } from './ver-documentos.service';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../loading.interceptor';

@Component({
  selector: 'app-ver-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-documentos.component.html',
  styleUrl: './ver-documentos.component.css',
  
})
export class VerDocumentosComponent {

  private docyumetnsService = inject(VerDocumentosService);
  private loadingService = inject(LoadingService);

  isLoading: boolean = false;
  documents: any = []
 

  ngOnInit(): void {
    this.getDocuments();
  }
  getDocuments() {
    this.docyumetnsService.getDocuments().subscribe((data) => {
      this.documents = data.body;
    });
  }
  removeDocument(id: string) {
    this.isLoading = true;
    this.docyumetnsService.deleteDocument(id).subscribe((response) => {
      if(!response.error)
        this.getDocuments();
      this.isLoading = false;
    });
  }
}
