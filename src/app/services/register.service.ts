import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DataRegister } from '../utils/interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

httpClient = inject(HttpClient);



registerUser(body:DataRegister){
  return this.httpClient.post(environment.urlUsuarios+ environment.usuariosEndpoints.usuarios+ environment.usuariosEndpoints.endpoints.register, body)

}


}
