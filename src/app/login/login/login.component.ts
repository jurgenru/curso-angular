import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sw = true;

  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

/*  onLogin(): void{
    console.log('USERNAME: ', this.username);
    console.log('PASSWORD: ', this.password);
  }*/

  onLogin2(form): void{
//    console.log('Variables: ', form.value);
    this.router.navigate(['/pages']);
  }
}
