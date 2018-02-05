import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'andrej.rist@gmail.com';
  password;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onKeyName(val) {
    this.userName = val;
  }
  onKeyPsw(val) {
    this.password = val;
  }

  signup() {
    this.authService.signup(this.userName, this.password)
      .then(res => {
        debugger;
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/trade-history');
      })
      .catch(err => {
        debugger;
        console.error(err);
      });
    this.userName = this.password = '';
  }

  login() {
    this.authService.login(this.userName, this.password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/trade-history');
      })
      .catch(err => {
        debugger;
        console.error(err);
      });
    this.userName = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}







