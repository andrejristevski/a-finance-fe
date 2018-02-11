import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { ChartService } from '../../../../services/chart.service';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';


@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.css']
})
export class CreateChartComponent implements OnInit {

  constructor(private service: DataService, private chartService: ChartService) {
  }

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
    showCheckAll: true,
    showUncheckAll: true,
  };

  ngOnInit() {
    this.inputCurrencies =
      this.getIMultiSelectOptionFromStringArray(this.service.getCurrencies());
    this.outputCurrencies =
      this.getIMultiSelectOptionFromStringArray(this.service.getOutCurrencies());
    this.chartTypes =
      this.getIMultiSelectOptionFromStringArray(this.service.getChartTypes());
  }

  onChange() {
    if (this.chartTypeSelected[0] === 2) {
      this.outputCurrencies = this.getIMultiSelectOptionFromStringArray(
        this.service.getSuportedOutputCurPerSum());
      // this.outputCurSelected = [0]
    } else {
      this.outputCurrencies =
        this.getIMultiSelectOptionFromStringArray(this.service.getOutCurrencies());
      // this.outputCurSelected = [0]
    }
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
      .map(index => this.inputCurrencies[index].name)[0]
    const outCurrencies = this.outputCurSelected
      .map(index => this.outputCurrencies[index].name)
    const chartTypeString = this.chartTypeSelected
      .map(index => this.chartTypes[index].name)[0]

    return { inpCur, outCurrencies, chartTypeString }
  }

  getIMultiSelectOptionFromStringArray(values) {
    let res = [];
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
