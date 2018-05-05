import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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

  today = new Date();
  startDate: any = (new Date()).setDate(this.today.getDate() - 1);
  endDate: any = new Date(this.today);

  chartTypes;
  currencies;

  inpCurSelected = [];
  outputCurSelected = [];
  chartTypeSelected = [];

  formState = {
    inpCurSelected: {
      touched: false,
      errors: []
    },
    outputCurSelected: {
      touched: false,
      errors: []
    },
    chartType: {
      touched: false,
      errors: []
    },
    exchangeRate: {
      touched: false,
      errors: []
    },
    startDate: {
      touched: false,
      errors: []
    },
    endDate: {
      touched: false,
      errors: []
    },
    other: {
      touched: false,
      errors: []
    }
  };

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

  @ViewChild('startDatePickerEl') startDatePicker: any;
  @ViewChild('endDatePickerEl') endDatePicker: any;

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

  ngAfterViewInit() {
    this.startDatePicker.elementRef.nativeElement.children[0].children[0].style.width = '100%';
    this.endDatePicker.elementRef.nativeElement.children[0].children[0].style.width = '100%';
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

  inputCurAdded() {
    this.formState.inpCurSelected.touched = true;
  }

  outputCurAdded() {
    this.formState.outputCurSelected.touched = true;
  }

  onChartSelected() {
    this.formState.chartType.touched = true;
  }

  startDateChanged() {
    this.formState.startDate.touched = true;
  }

  endDateChanged() {
    this.formState.endDate.touched = true;
  }

  resetErrors() {
    this.formState.inpCurSelected.errors = [];
    this.formState.outputCurSelected.errors = [];
    this.formState.chartType.errors = [];
    this.formState.other.errors = [];
    this.formState.startDate.errors = [];
    this.formState.endDate.errors = [];

  }

  validateChartPair() {

    this.resetErrors();
    if (
      this.validateOneInputCcyError()
      || this.validateOneOutputCcyError()
      || this.validateChartTypeError()
      || this.validateSameCcyError()
      || this.validateDateOverlapping()
      || this.validateFeautureDate()) {
      return true;
    }
    return false;
  }

  validateStrength() {
    this.resetErrors();

    if (this.validateTwoOutputCcyError()
      || this.validateChartTypeError()
      || this.validateDateOverlapping()
      || this.validateFeautureDate()) {
      return true;
    }
    return false;
  }

  // ako ima error vraka true
  validateOneInputCcyError() {
    if (this.inpCurSelected.length === 0) {
      this.formState.inpCurSelected.errors.push('Input ccy is not selected');
      return true;
    }
    return false;
  }

  validateOneOutputCcyError() {
    if (this.outputCurSelected.length === 0) {
      this.formState.outputCurSelected.errors.push('Output ccy is not selected');
      return true;
    }
    return false;
  }

  validateTwoOutputCcyError() {
    if (this.outputCurSelected.length < 2) {
      this.formState.outputCurSelected.errors.push('At least two ccy must be selected');
      return true;
    }
    return false;
  }

  validateChartTypeError() {
    if (this.chartTypeSelected[0]) {
      return false;
    }
    this.formState.chartType.errors.push('Chart type must be selected');
    return true;
  }

  validateSameCcyError() {
    if (this.inpCurSelected[0]) {
      if (this.outputCurSelected.some(ccy => ccy.item_text === this.inpCurSelected[0].item_text)) {
        this.formState.other.errors.push('Input and output ccy the same for pair data');
        return true;
      }
    }
    return false;
  }

  validateDateOverlapping() {
    if (this.formState.startDate.touched && this.formState.endDate.touched) {
      if (this.isSecondDateEarlierThanFirst(this.startDate, this.endDate)) {
        this.formState.startDate.errors.push('Invalid date');
        return true;
      }
    }
    return false;
  }

  validateFeautureDate() {

    if (this.formState.startDate.touched && this.isSecondDateEarlierThanFirst(this.startDate, new Date())) {
      this.formState.startDate.errors.push('Invalid date');
      return true;
    }
    if (this.formState.endDate.touched && this.isSecondDateEarlierThanFirst(this.endDate, new Date())) {
      this.formState.endDate.errors.push('Invalid date');
      return true;
    }
    return false;
  }

  isSecondDateEarlierThanFirst(d1, d2) {
    const yearModel = d1.getFullYear();
    const monthModel = d1.getMonth();
    const dayModel = d1.getDate();

    const today = d2;
    const tYear = today.getFullYear();
    const tMonth = today.getMonth();
    const tDay = today.getDate();

    if (yearModel > tYear) {
      return true;
    } else if (monthModel > tMonth && yearModel === tYear) {
      return true;
    } else if (monthModel === tMonth && yearModel === tYear && dayModel > tDay) {
      return true;
    } else {
      return false;
    }
  }

  ifFormInvalid() {
    debugger;
    if (this.chartTypeSelected[0] && this.chartTypeSelected[0].item_text === ChartType['PAIR']) {
      return this.validateChartPair();
    } else if (this.chartTypeSelected[0]) {
      return this.validateStrength();
    }

    return true;
  }
}
