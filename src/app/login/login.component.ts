import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sw = true;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void{
    console.log('Formulario: ', form.value);

    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('Login Resp: ', res);
        this.router.navigate(['pages']);
      },
      error => {
        console.log('Login ERROR: ');
      }
    );
  }

/*  onLogin2(): void{
//    console.log('Variables: ', form.value);
    this.router.navigate(['/pages']);
  }*/
}
