import { Injectable } from '@angular/core';
import { ChartType, PercentageSumCur } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor() { }


  getCurrencies() {
    let allCur = JSON.parse('{ "EUR": 1, "MKD": 1, "AUD": 1.4988,  "CAD": 1.4718,  "CNY": 7.7577,   "JPY": 130.36,"USD": 1.1405 }');
    return Object.keys(allCur);
  }
  getOutCurrencies() {
    let allCur = JSON.parse('{ "EUR": 1, "MKD": 1, "AUD": 1.4988, "BGN": 1.9558, "BRL": 3.7258, "CAD": 1.4718, "CHF": 1.104, "CNY": 7.7577, "CZK": 26.124, "DKK": 7.4365, "GBP": 0.88318, "HKD": 8.9084, "HRK": 7.411, "HUF": 308.13, "IDR": 15272, "ILS": 4.077, "INR": 73.665, "JPY": 130.36, "KRW": 1312.2, "MXN": 20.546, "MYR": 4.9013, "NOK": 9.512, "NZD": 1.5788, "PHP": 57.813, "PLN": 4.246, "RON": 4.5685, "RUB": 69.33, "SEK": 9.639, "SGD": 1.5783, "THB": 38.891, "TRY": 4.1431, "USD": 1.1405, "ZAR": 15.46 }');
    return Object.keys(allCur);
  }

  getChartTypes() {
    return Object.keys(ChartType)
      .map(key => ChartType[key]);
  }

  getSuportedOutputCurPerSum() {
    return PercentageSumCur;
  }
}
