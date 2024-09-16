import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return new Promise<boolean>((resolve) => {
    if (typeof window !== 'undefined') {
      const storage = sessionStorage.getItem('userSession');
      if (storage) {
        const userSession = JSON.parse(storage);
        if (userSession.time > new Date().getTime() - 3600000) {
          if (userSession.state === 'true') {
            loginService.setLoggedIn(true);
            resolve(true);
          } 
        } else {
          
          loginService.setLoggedIn(false);
            toastr.error('Please log in again', 'Your session has expired!');
          router.navigate(['login']);
          resolve(false);
        }
      } else {
        loginService.isLoggedIn().subscribe((resp) => {
          if (resp) {
            resolve(true);
          } else {
            router.navigate(['login']);
            resolve(false);
          }
        });
      }
    } else {
      resolve(false);
    }
  });
};