import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {
    userName: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    let logged = false;
    this.loginService.login(this.usuario).subscribe(
      data => {
        const token = data.token;
        localStorage.setItem('jwt', token);
        logged = true;
      },
      err => {
        alert('Credenciales erróneas');
      },
      () => { if (logged) { this.router.navigate(['/home']); }}
    );
  }

}