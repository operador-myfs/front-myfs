import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerDocumentosService {

  private http = inject(HttpClient);
  private environment = environment; 
  constructor() { }

  getDocuments() {
    return this.http.get<any>(this.environment.url + this.environment.documentsEndpoints.documents);
  }
  deleteDocument(id: string) {
    return this.http.delete<any>(this.environment.url + this.environment.documentsEndpoints.documents + '/' + id);
  } 
}
