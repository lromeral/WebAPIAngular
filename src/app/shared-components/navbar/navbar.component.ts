import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../guards/auth-guard.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  

  usuario: any = {
    userName: ''
  };

  constructor(private authService: AuthGuard, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.usuario.userName = this.authService.getUserName();
  }

  logout() {
    this.loginService.logout(this.usuario).subscribe(
      data => {
        localStorage.removeItem('jwt');
      },
      err => alert('Error en el acceso a datos'),
      () => this.router.navigate(['/login'])
    );
  }
}