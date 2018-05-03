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

  inpCurSelected = [];
  outputCurSelected = [];
  currencies = [];
  sum;
  exchangeRate;
  date = new Date();

  @ViewChild('datepick') datepicker: any;

  dropdownSettingsSingle = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: false,
  };

  ngOnInit() {
    PercentageSumCur.forEach((ccy, i) => {
      this.currencies.push(
        {
          item_id: i + 1,
          item_text: ccy,
        }
      );
    });
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
    debugger;
    const exchange = {
      sum: this.sum,
      exchangeRate: this.exchangeRate,
      inputCcy: this.inpCurSelected[0].item_text,
      outCcy: this.outputCurSelected[0].item_text,
      date: this.date.toISOString().split('T')[0],
      balance: this.sum * this.exchangeRate
    };
    this.userDataService.saveExchangeForUser(exchange);
  }
}
