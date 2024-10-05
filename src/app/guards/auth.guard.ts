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
      let token =
        loginService.getIdToken() || sessionStorage.getItem('idToken');
      if (token) {
        loginService.setIdToken(token);
        loginService.setLoggedIn(true);
        resolve(true);
      } else {
        loginService.isLoggedIn().subscribe((resp) => {
          if (resp) {
            resolve(true);
          } else {
            if (sessionStorage.getItem('idToken')) {
              sessionStorage.removeItem('idToken');
            }
            router.navigate(['login']);
            resolve(false);
          }
        });
      }
    } else {
      if (sessionStorage.getItem('idToken')) {
        sessionStorage.removeItem('idToken');
      }
      router.navigate(['login']);
      resolve(false);
    }
  });
};
