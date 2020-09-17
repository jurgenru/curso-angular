import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.verifyLogged()) {
      this.router.navigate(['admin']);
    }
  }

  onLogin(form: any): void {
    console.log('Form',form.value);
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('Login Resp: ', res);
        this.router.navigate(['admin']);
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
