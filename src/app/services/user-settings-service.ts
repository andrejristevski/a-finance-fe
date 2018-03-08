import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserSettingsService {

    private usersDbPath = 'users';
    users: any;

    constructor(private db: AngularFireDatabase) {
        this.users = this.db.list(this.usersDbPath);
    }

    createUserSettings() {

    }

    updateUserSettings() {

    }

    getUserSettings() {
        const userId = JSON.parse(localStorage.getItem('user')).uid;
        debugger;
        this.db.object(`${this.usersDbPath}/${userId}}`);
    }

}
