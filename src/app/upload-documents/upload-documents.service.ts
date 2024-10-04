import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UploadDocumentsService {
  private http = inject(HttpClient);
  private environment = environment; 
  private loginService = inject(LoginService);

  constructor() { }

  uploadDocumets(file: any) {
    const idToken = this.loginService.getIdToken() || '';
    const access_token = this.loginService.getAccessToken() || '';
    let headers =  new HttpHeaders()
    .set('Authorization', `Bearer ${idToken}`)
    .set('IdToken', access_token);
    const body :FormData = new FormData();
    body.append('file', file);
    return this.http.post<any>(this.environment.url + this.environment.documentsEndpoints.documents,body, {headers});
  }
}
