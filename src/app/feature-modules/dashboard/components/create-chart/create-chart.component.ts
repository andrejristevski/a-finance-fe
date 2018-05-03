import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartService } from '../../../../services/chart.service';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { SnotifyService } from 'ng-snotify';
import { ChartType, PercentageSumCur, notificationOptions } from '../../../../../environments/environment';
import { debug } from 'util';

@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.scss']
})
export class CreateChartComponent implements OnInit {

  constructor(private chartService: ChartService,
    private notif: SnotifyService) {
  }

  today = new Date();
  startDate: any = (new Date()).setDate(this.today.getDate() - 1);
  endDate: any = new Date(this.today);

  chartTypes;
  currencies;

  inpCurSelected = [];
  outputCurSelected = [];
  chartTypeSelected = [];


  dropdownSettingsMultiple = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: false
  };

  dropdownSettingsSingle = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: false,
  };

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  ngOnInit() {
    this.currencies = [];
    PercentageSumCur.forEach((ccy, i) => {
      this.currencies.push(
        {
          item_id: i + 1,
          item_text: ccy,
        }
      );
    });

    this.chartTypes =
      this.getIMultiSelectOptionFromStringArray(Object.keys(ChartType)
        .map(key => ChartType[key]));
  }

  setDate(monts) {
    this.startDate = this.addMonths(new Date(), -1 * monts);
  }

  addMonths(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
  }


  createChart() {
    const { inpCur, outCurrencies, chartTypeString } = this.getMappedCallValues();

    this.chartService.createChart(
      inpCur,
      outCurrencies,
      new Date(this.startDate),
      new Date(this.endDate),
      chartTypeString
    );
  }

  getMappedCallValues() {

    const inpCur = this.inpCurSelected
      .map(ccy => ccy.item_text)[0];
    const outCurrencies = this.outputCurSelected
      .map(ccy => ccy.item_text);
    const chartTypeString = this.chartTypeSelected
      .map(ccy => ccy.item_text)[0];

    return { inpCur, outCurrencies, chartTypeString };
  }

  getIMultiSelectOptionFromStringArray(values) {
    const res = [];
    values.forEach((element, i) => {
      res.push(
        {
          item_id: i + 1,
          item_text: element,
        });
    });
    return res;
  }
}
