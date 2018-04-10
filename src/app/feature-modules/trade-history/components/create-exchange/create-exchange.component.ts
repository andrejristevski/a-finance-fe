import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-create-exchange',
  templateUrl: './create-exchange.component.html',
  styleUrls: ['./create-exchange.component.scss']
})
export class CreateExchangeComponent implements OnInit {

  constructor(private chartsDataservice: DataService) { }

  inpCurSelected: number[];
  outCurSelected: number[];
  inputCurrencies: IMultiSelectOption[];
  sum;
  exchangeRate;

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
    debugger;
  }
}
