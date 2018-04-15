import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { notificationOptions } from '../../environments/environment';
import { SnotifyService } from 'ng-snotify';

@Injectable()
export class UserSettingsService {

    private usersDbPath = 'chart-settings';
    private itemRef;
    private exchangesDbPath = 'exchanges';
    private exchangesRef;

    constructor(private db: AngularFireDatabase,
        private notif: SnotifyService) {
        // const userId = JSON.parse(localStorage.getItem('user')).uid;
        const userId = 'asdasd';
        this.itemRef = this.db.object(`${this.usersDbPath}/${userId}}`);
        this.exchangesRef = this.db.list(`${this.exchangesDbPath}/${userId}}`);
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

    saveExchangeForUser(exchange) {
        this.exchangesRef.push(exchange)
            .then(suc => {
                this.notif.success('Charts settings saved', notificationOptions);
            }).catch(err => {
                this.notif.error('Error while saving charts', notificationOptions);
            });
        // this.itemRef.update({ exchanges: exchange })
        //     .then(suc => {
        //         this.notif.success('Charts settings saved', notificationOptions);
        //     }).catch(err => {
        //         this.notif.error('Error while saving charts', notificationOptions);
        //     });
    }

    getUserExchanges() {
       return this.exchangesRef.snapshotChanges();
    }

}
