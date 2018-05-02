import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { UserSettingsService } from '../../../../services/user-settings-service';
import { PercentageSumCur } from '../../../../../environments/environment';

@Component({
  selector: 'app-create-exchange',
  templateUrl: './create-exchange.component.html',
  styleUrls: ['./create-exchange.component.scss']
})
export class CreateExchangeComponent implements OnInit, AfterViewInit {

  constructor(
    private userDataService: UserSettingsService) { }

  inpCurSelected: number[];
  outCurSelected: number[];
  inputCurrencies: IMultiSelectOption[];
  sum;
  exchangeRate;
  date = new Date();

  @ViewChild('datepick') datepicker: any;

  inpCurSettings: IMultiSelectSettings = {
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 1,
    selectionLimit: 1,
    autoUnselect: true,
  };

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

  ngOnInit() {
    this.inputCurrencies = this.
      getIMultiSelectOptionFromStringArray(PercentageSumCur);
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

  ngAfterViewInit() {
    this.datepicker.elementRef.nativeElement.children[0].children[0].style.width = '100%';
  }

  createExchange() {
    const exchange = {
      sum: this.sum,
      exchangeRate: this.exchangeRate,
      inputCcy: this.inputCurrencies[this.inpCurSelected[0]].name,
      outCcy: this.inputCurrencies[this.outCurSelected[0]].name,
      date: this.date.toISOString().split('T')[0],
      balance: this.sum * this.exchangeRate
    };
    this.userDataService.saveExchangeForUser(exchange);
  }
}
