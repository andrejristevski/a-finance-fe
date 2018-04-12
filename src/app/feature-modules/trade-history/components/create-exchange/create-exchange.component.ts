import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { DataService } from '../../../../services/data.service';
import { UserSettingsService } from '../../../../services/user-settings-service';

@Component({
  selector: 'app-create-exchange',
  templateUrl: './create-exchange.component.html',
  styleUrls: ['./create-exchange.component.scss']
})
export class CreateExchangeComponent implements OnInit {

  constructor(private chartsDataservice: DataService,
    private userDataService: UserSettingsService) { }

  inpCurSelected: number[];
  outCurSelected: number[];
  inputCurrencies: IMultiSelectOption[];
  sum;
  exchangeRate;
  date = new Date();

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
    this.inputCurrencies = this.chartsDataservice.
      getIMultiSelectOptionFromStringArray(this.chartsDataservice.getSuportedOutputCurPerSum());
  }

  createExchange() {
    const exchange = {
      sum: this.sum,
      exchangeRate: this.exchangeRate,
      inputCcy: this.inputCurrencies[this.inpCurSelected[0]].name,
      outCcy: this.inputCurrencies[this.outCurSelected[0]].name,
      date: this.date.toISOString().split('T')[0]
    };
    this.userDataService.saveExchangeForUser(exchange);
  }
}