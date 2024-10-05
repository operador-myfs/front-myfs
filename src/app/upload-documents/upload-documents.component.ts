import { Component, inject } from '@angular/core';
import { UploadDocumentsService } from './upload-documents.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent {
  isLoading: boolean = false;

  private uploadService = inject(UploadDocumentsService);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  file: any

  constructor() { }

  ngOnInit(): void {
  }

  saveFile(event: any) {
    this.file = event.target.files[0];
  }
  uploadFile() {
    this.isLoading = true;
    this.uploadService.uploadDocumets(this.file).subscribe((data) => {
      this.isLoading = false;
      this.toastr.success('The document was uploaded successfully');
      this.router.navigate(['/documents']);
    }, error=> {
      this.isLoading = false;
      this.toastr.error('An error occurred while uploading the document');
    });
  }

}
