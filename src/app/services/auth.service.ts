import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { debug } from 'util';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Promise<any> {
    // this.http.post(`${environment['baseUrl']}/signup`, { email, password })
    //   .map(value => {
    //     debugger;
    //   });
    return this.http.
      post(`${environment['baseUrl']}/signup`, { username: email, pass: password })
      .toPromise()
      .then(val => {
        return val;
      }).catch(err => {

      });

  }

  login(email: string, password: string): Promise<any> {
    debugger;
    const url = `${environment['baseUrl']}/login`;
    return this.http.
      post(`${environment['baseUrl']}/login`, { username: email, pass: password })
      .toPromise()
      .then(val => {
        debugger;
        return val;
      }).catch(err => {
        debugger;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {

  }
}
