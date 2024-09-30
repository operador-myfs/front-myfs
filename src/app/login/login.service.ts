import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataLogin } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private environment = environment;
  private http = inject(HttpClient);
  constructor() {
    this.loggedIn$.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
  setLoggedIn(value: boolean): void {
    sessionStorage.setItem('userSession', JSON.stringify({
      state: true.toString(),
      time: new Date().getTime()
    }));
    this.loggedIn$.next(value);
  }
  loginFirstTime(loginBody:DataLogin) {
   
    return this.http.post(`${this.environment.urlUsuarios}${this.environment.usuariosEndpoints.usuarios}${this.environment.usuariosEndpoints.endpoints.login}`,loginBody);
  }
 
}
