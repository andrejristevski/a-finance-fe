import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserSettingsService {

    private usersDbPath = 'users';
    private itemRef;

    constructor(private db: AngularFireDatabase) {
        // this.users = this.db.list(this.usersDbPath);
        const userId = JSON.parse(localStorage.getItem('user')).uid;
        this.itemRef = this.db.object(`${this.usersDbPath}/${userId}}`);
    }

    getUserSettings() {
        return this.itemRef.snapshotChanges();
    }

    saveChartsSettingsForUser(settings) {
        this.itemRef.set({ chartSettings: settings });
    }

}
