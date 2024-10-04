import { Component, inject } from '@angular/core';
import { VerDocumentosService } from './ver-documentos.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-ver-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-documentos.component.html',
  styleUrl: './ver-documentos.component.css',
  
})
export class VerDocumentosComponent {

  private documentService = inject(VerDocumentosService);
  private toastr = inject(ToastrService);

  isLoading: boolean = false;
  documents: any = []
  saveDocument:any

  ngOnInit(): void {
    this.isLoading = true;
    this.getDocuments();
  }
  saveSearchDocument(event:any) {
    this.saveDocument = event.target.value;
  }
  getDocuments() {
    this.documentService.getDocuments().subscribe((data) => {
      this.documents = data.body;
      this.isLoading = false;
    },error=> {
      this.isLoading = false;
      this.toastr.error('An error occurred while trying to get the documents');
    });
  }
  getDocument() {
    this.isLoading = true;
    this.documentService.getDocument(this.saveDocument).subscribe((data) => {
      if(!data.error){
        this.documents = []
        this.documents.push(data.body);
        this.isLoading = false;
        this.saveDocument =""
      }
   
    }, (error) => {
      this.toastr.error(`The document with id ${this.saveDocument} does not exist`);
      this.isLoading = false;
    })
  }
  removeDocument(event: string) {
    const id =  event
    this.isLoading = true;
    this.documentService.deleteDocument(id).subscribe((response) => {
      if(!response.error){
         this.toastr.success('The document was deleted successfully');
        this.getDocuments();
      }
      this.isLoading = false;
    });
  }
  seeDocument(event:string){
    this.isLoading = true;
    this.documentService.seeDocumentPreSignedUrl(event).subscribe((data) => {
      if(!data.error){
        window.open(data.body,'_blank');
        this.isLoading = false;
      }
    })
  }
}
