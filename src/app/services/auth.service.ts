import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { debug } from 'util';
import { SnotifyService } from 'ng-snotify';
import { notificationOptions } from '../../environments/environment';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
    private notif: SnotifyService) { }

  signup(email: string, password: string): Promise<any> {
    return this.http.
      post(`${environment['baseUrl']}/signup`, { username: email, pass: password })
      .toPromise()
      .then(val => {
        return val;
      }).catch(err => {
        this.notif.error('error signin up', notificationOptions);
      });

  }

  login(email: string, password: string): Promise<any> {
    const url = `${environment['baseUrl']}/login`;
    return this.http.
      post(`${environment['baseUrl']}/login`, { username: email, pass: password })
      .toPromise()
      .then(val => {
        return val;
      }).catch(err => {
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {

  }
}
