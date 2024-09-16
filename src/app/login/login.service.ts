import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  constructor() { 
    this.loggedIn$.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
  setLoggedIn(value: boolean): void {
    sessionStorage.setItem('userSession', JSON.stringify({
      state:true.toString(),
      time: new Date().getTime()
    }));
    this.loggedIn$.next(value);
  }
  
}
