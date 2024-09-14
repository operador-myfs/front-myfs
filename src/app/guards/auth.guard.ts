import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from '../login/login.service';

export const authGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);
  return new Promise<boolean>((resolve) => {
    loginService.isLoggedIn().subscribe((resp) => {
      if (resp) {
        resolve(true);
      } else {
        router.navigate(['login']);
        resolve(false);
      }
    });
  });
};
