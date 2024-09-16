import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadDocumentsService {
  private http = inject(HttpClient);
  private environment = environment; 
  constructor() { }

  uploadDocumets(file: any) {
    const body :FormData = new FormData();
    body.append('file', file);
    return this.http.post<any>(this.environment.url + this.environment.documentsEndpoints.documents,body);
  }
}
