import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  signup(email: string, password: string): Promise<any> {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        return value;
      });
  }

  login(email: string, password: string): Promise<any> {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        return value;
      });

  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }
}