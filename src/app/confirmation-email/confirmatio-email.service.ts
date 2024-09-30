import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ConfirmationEmail } from '../utils/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmatioEmailService {
  private environment = environment;
  private http = inject(HttpClient);
  
  confirmationEmail(confirmatioEmail:ConfirmationEmail) {
    return this.http.post(`${this.environment.urlUsuarios}${this.environment.usuariosEndpoints.usuarios}${this.environment.usuariosEndpoints.endpoints.login}`,confirmatioEmail);

  }
}
