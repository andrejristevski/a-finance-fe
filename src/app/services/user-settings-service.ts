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
        const itemRef = this.db.object(`${this.usersDbPath}/${userId}}`);

        const data = itemRef.snapshotChanges()
            .subscribe(action => {
                const asd = action.payload.val();
                debugger;
            });
    }

}
