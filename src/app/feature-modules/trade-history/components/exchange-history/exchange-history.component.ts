import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../../../../services/user-settings-service';

@Component({
  selector: 'app-exchange-history',
  templateUrl: './exchange-history.component.html',
  styleUrls: ['./exchange-history.component.scss']
})
export class ExchangeHistoryComponent implements OnInit {

  exchanges = [];

  constructor(private userDataService: UserSettingsService) { }

  ngOnInit() {
    this.userDataService.getUserExchanges()
      .subscribe(res => {
        if (res.length) {
          res.forEach(exchange => {
            this.exchanges.push(exchange);
          });
        } else {
          this.exchanges.push(res);
        }

      });
  }

}
