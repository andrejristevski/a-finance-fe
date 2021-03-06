import { Injectable } from '@angular/core';
import { notificationOptions } from '../../environments/environment';
import { SnotifyService } from 'ng-snotify';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/merge';

@Injectable()
export class UserSettingsService {

    private subject = new Subject();

    constructor(
        private notif: SnotifyService,
        private http: HttpClient) {
    }

    getUserSettings(): any {
       return this.http
            .get(`${environment['baseUrl']}/chartsettings`);
    }

    saveChartsSettingsForUser(chartSettings) {
        this.http
            .post(`${environment['baseUrl']}/chartsettings`, chartSettings)
            .subscribe(
                res => {
                    this.notif.success('Charts settings saved', notificationOptions);
                },
                err => {
                    this.notif.error('Error while saving charts', notificationOptions);
                });
    }

    saveExchangeForUser(exchange) {
        this.http
            .post(`${environment['baseUrl']}/exchanges`, exchange)
            .subscribe(
                res => {
                    this.notif.success('Exchange  saved', notificationOptions);
                    this.subject.next(exchange);
                },
                err => {
                    this.notif.error('Error while saving exchange', notificationOptions);
                });
    }

    getUserExchanges(): any {

        const initialExchanges = this.http
            .get(`${environment['baseUrl']}/exchanges`);

        const subsc = initialExchanges.merge(this.subject);
        return subsc;
    }

}
