import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { notificationOptions } from '../../environments/environment';
import { SnotifyService } from 'ng-snotify';

@Injectable()
export class UserSettingsService {

    private usersDbPath = 'users';
    private itemRef;

    constructor(private db: AngularFireDatabase,
        private notif: SnotifyService) {
        // this.users = this.db.list(this.usersDbPath);
        const userId = JSON.parse(localStorage.getItem('user')).uid;
        this.itemRef = this.db.object(`${this.usersDbPath}/${userId}}`);
    }

    getUserSettings() {
        return this.itemRef.snapshotChanges();
    }

    saveChartsSettingsForUser(settings) {
        this.itemRef.set({ chartSettings: settings })
            .then(suc => {
                this.notif.success('Charts settings saved', notificationOptions);
            }).catch(err => {
                this.notif.error('Error while saving charts', notificationOptions);
            });
    }

}
