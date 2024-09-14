import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private router = inject(Router);
  private loginService = inject(LoginService);

  logOut() {
    this.loginService.setLoggedIn(false);
    this.router.navigate(['login'])
  }
  navigate(event: number) {
    switch (event) {
      case 1:
        this.router.navigate(['home']);
        break;
      case 2:
        this.router.navigate(['documents']);
        break;
      default:
        break;
    }
    this.router.navigate(['home']);
  }
}
