import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NetworkService } from './network.service';
import { ChartType } from '../../environments/environment';

@Injectable()
export class ChartService {

  charts = [];

  handlers = {
    [ChartType.PAIR]: (startDate, endDate, inpCur, outCur): Observable<any> =>
      this.networkService.getDataForCurrencyPair(startDate, endDate, inpCur, outCur),
    [ChartType.CURRENCY_STRENGTH]: (startDate, endDate, inpCur, outCur): Observable<any> =>
      this.networkService.getCurrencyStrength(startDate, endDate, inpCur, outCur),
    [ChartType.PERCENTAGE_SUM]: (startDate, endDate, inpCur, outCur): Observable<any> =>
      this.networkService.getPercentageSum(startDate, endDate, inpCur, outCur),

  };

  constructor(private networkService: NetworkService) { }


  getCharts() {
    return this.charts;
  }

  createDefault() {
    this.createChart('EUR', ['CAD', 'AUD', 'USD'], new Date(2016, 1, 20), new Date());
  }

  deleteChart(id) {

    for (let i = 0; i < this.charts.length; i++) {
      if (this.charts[i].id === id) {
        this.charts.splice(i, 1);
        return;
      }
    }
  }

  createChart(inp, out, startDate, endDate, type = 'PairData') {
    const obs = this.getResults(startDate, endDate, inp, out, type);
    console.log(`Creating chart with ${type}`);
    obs.subscribe(data => {
      this.charts.push({ id: (Math.random() * 10).toFixed(8), data });
    });
  }

  getResults(startDate, endDate, inp, out, type) {
    const { startDateString, endDateString } = this.getDatesStrings(startDate, endDate);
    return this.handlers[type](startDateString, endDateString, inp, out);
  }

  getDatesStrings(startDate, endDate) {
    const sy = startDate.getFullYear();
    const ey = endDate.getFullYear();

    const sm = (startDate.getMonth() + 1) < 10 ? '0' + (startDate.getMonth() + 1) : startDate.getMonth() + 1;
    const em = (endDate.getMonth() + 1) < 10 ? '0' + (endDate.getMonth() + 1) : endDate.getMonth() + 1;

    const sdA = startDate.getDate() < 10 ? '0' + startDate.getDate() : startDate.getDate();
    const edA = endDate.getDate() < 10 ? '0' + endDate.getDate() : endDate.getDate();

    const startDateString = `${sy}-${sm}-${sdA}`;
    const endDateString = `${ey}-${em}-${edA}`;
    return { startDateString, endDateString };
  }
}


