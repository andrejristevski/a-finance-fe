import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { notificationOptions } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = 'test@gmail.com';
  password = 'testte';

  constructor(private authService: AuthService,
    private router: Router,
    private notif: SnotifyService) { }

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
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/dashboard');
      })
      .catch(err => {
        console.error(err);
        this.notif.error('error signin up', notificationOptions);
      });
    this.userName = this.password = '';
  }

  login() {
    this.authService.login(this.userName, this.password)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigateByUrl('/dashboard');
      })
      .catch(err => {
        console.error(err);
        this.notif.error('error login in', notificationOptions);
      });
    this.userName = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}







