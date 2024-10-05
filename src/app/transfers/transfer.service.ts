import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  httpClient = inject(HttpClient);
   environment = environment; 



  obtenerOperadores() {
    return this.httpClient.get(environment.url + environment.documentsEndpoints.operators);
  }

}
