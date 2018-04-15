import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ChartType } from '../../environments/environment';

@Injectable()
export class NetworkService {

  constructor(private http: HttpClient) { }

  getDataForCurrencyPair(sd, ed, inpCur, outCur) {
    return this.http.
      post(`${environment['baseUrl']}/${environment['curPairPath']}`,
      {
        startDate: sd,
        endDate: ed,
        inp: inpCur,
        out: outCur
      }).map((res: Response) => {
        return res.json();
      });
  }

  getCurrencyStrength(sd, ed, inpCur, outCur) {
    return this.http.
      post(`${environment['baseUrl']}/${environment['strength']}`, {
        startDate: sd,
        endDate: ed,
        inp: inpCur,
        out: outCur
      }).map((res: Response) => {
        return res.json();
      });
  }

  getPercentageSum(sd, ed, inpCur, outCur) {
    return this.http.
      post(`${environment['baseUrl']}/${environment['percentagesum']}`, {
        startDate: sd,
        endDate: ed,
        inpCur,
        outCur,
      }).map((res: Response) => {
        return res.json();
      });
  }
}
