import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NetworkService } from './network.service';
import { UserSettingsService } from './user-settings-service';

import { ChartType } from '../../environments/environment';

@Injectable()
export class ChartService {

  charts = [];

  handlers = {
    [ChartType.PAIR]: (startDate, endDate, inpCur, outCur): Observable<any> =>
      this.networkService.getDataForCurrencyPair(startDate, endDate, inpCur, outCur),
    [ChartType.CURRENCY_STRENGTH]: (startDate, endDate, inpCur, outCur): Observable<any> =>
      this.networkService.getCurrencyStrength(startDate, endDate, inpCur, outCur),
    // [ChartType.PERCENTAGE_SUM]: (startDate, endDate, inpCur, outCur): Observable<any> =>
    //   this.networkService.getPercentageSum(startDate, endDate, inpCur, outCur),

  };

  constructor(private networkService: NetworkService,
    private settingsService: UserSettingsService) {

    this.settingsService.getUserSettings()
      .subscribe(cs => {
        debugger;
        this.generateCharts(cs.chartsSettings);
      });
  }


  generateCharts(chartsSettings) {
    chartsSettings.forEach(cs => {
      const startDate = new Date(cs.startDate);
      const endDate = new Date(cs.endDate);
      if (this.charts.filter(c => c.id === cs.id).length === 0) {
        this.createChart(cs.inp, cs.out, startDate, endDate, cs.type, cs.id);
      }
    });
  }

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

  createChart(inp, out, startDate, endDate, type = 'PairData', id?) {
    const obs = this.getResults(startDate, endDate, inp, out, type);

    const chartSettings = {
      inp, out, startDate: startDate.toISOString(),
      endDate: endDate.toISOString(), type, id: undefined
    };

    if (id) {
      chartSettings.id = id;
    } else {
      chartSettings.id = (Math.random() * 10).toFixed(8);
    }

    console.log(`Creating chart with ${type}`);
    obs.subscribe(data => {
      this.charts.push({ id: chartSettings.id, data, chartSettings });
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

  saveCharts() {

    const chartsSettings = this.charts
      .map(chart => chart.chartSettings);
    // this.charts = [];
    this.settingsService.saveChartsSettingsForUser(chartsSettings);

  }

}


