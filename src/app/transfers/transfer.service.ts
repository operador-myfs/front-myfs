import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';
import { DataTransfer } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  httpClient = inject(HttpClient);
  environment = environment;

  private loginService = inject(LoginService);

  obtenerOperadores() {
    return this.httpClient.get(
      environment.url + environment.documentsEndpoints.operators
    );
  }
  transferrence(bodyTransfer: DataTransfer) {
    const idToken = this.loginService.getIdToken() || '';
    let headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`);
    return this.httpClient.post(
      environment.url +
        environment.documentsEndpoints.transfer,
        bodyTransfer,
      { headers }
    );
  }
}
