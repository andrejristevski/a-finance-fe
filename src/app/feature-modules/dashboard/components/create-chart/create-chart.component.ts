import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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
export class CreateChartComponent implements OnInit, AfterViewInit {

  constructor(private chartService: ChartService,
    private notif: SnotifyService) {
  }

  @ViewChild('multiSelecInput') multiSelecInput;
  @ViewChild('multiSelecOutput') multiSelecOutput;
  @ViewChild('multiSelecChartType') multiSelectChartType;

  today = new Date();
  startDate: any = (new Date()).setDate(this.today.getDate() - 1);
  endDate: any = new Date(this.today);

  chartTypeSelected: number[] = [0];
  chartTypes: IMultiSelectOption[];

  inpCurSelected: number[] = [0];
  inputCurrencies: IMultiSelectOption[];

  outputCurSelected: number[] = [2];
  outputCurrencies: IMultiSelectOption[];

  inpCurTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select currency',
    allSelected: 'All selected',
  };

  inpCurSettings: IMultiSelectSettings = {
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 1,
    selectionLimit: 1,
    autoUnselect: true,
  };

  outCurSettings: IMultiSelectSettings = {
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    itemClasses: 'text-dark bg-light',
    showCheckAll: true,
    showUncheckAll: true,
  };

  ngOnInit() {
    this.inputCurrencies =
      this.getIMultiSelectOptionFromStringArray(PercentageSumCur);
    this.outputCurrencies =
      this.getIMultiSelectOptionFromStringArray(PercentageSumCur);
    this.chartTypes =
      this.getIMultiSelectOptionFromStringArray(Object.keys(ChartType)
        .map(key => ChartType[key]));
  }


  ngAfterViewInit() {

  }

  chartChanged() {
    this.inpCurSelected = [0];
    this.outputCurSelected = [2];
  }

  chartOpened(element) {
  }


  onChange() {
  }

  setDate(monts) {
    this.startDate = this.addMonths(new Date(), -1 * monts);
  }

  addMonths(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
  }

  a(monts) {
    this.chartService.createDefault();
  }

  post() {
    this.notif.success('Success', notificationOptions);
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
      .map(index => this.inputCurrencies[index].name)[0];
    const outCurrencies = this.outputCurSelected
      .map(index => this.outputCurrencies[index].name);
    const chartTypeString = this.chartTypeSelected
      .map(index => this.chartTypes[index].name)[0];

    return { inpCur, outCurrencies, chartTypeString };
  }

  getIMultiSelectOptionFromStringArray(values) {
    const res = [];
    values.forEach((element, i) => {
      res.push(
        {
          id: i,
          name: element
        });
    });
    return res;
  }
}
