import { inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataLogin } from '../utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private environment = environment;
  private http = inject(HttpClient);
  public id_token = signal<string | null>(null);
  public access_token = signal<string | null>(null);
  constructor() {
    this.loggedIn$.next(false);
  }
  getIdToken(): string | null {
    return this.id_token();
  }

  setIdToken(token: string | null): void {
    this.id_token.set(token);
  }

  getAccessToken(): string | null {
    return this.access_token();
  }

  setAccessToken(token: string | null): void {
    this.access_token.set(token);
  }
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
  setLoggedIn(value: boolean): void {
    this.loggedIn$.next(value);
  }
  loginFirstTime(loginBody: DataLogin) {
    return this.http.post(
      `${this.environment.urlUsuarios}${this.environment.usuariosEndpoints.usuarios}${this.environment.usuariosEndpoints.endpoints.login}`,
      loginBody
    );
  }
}
