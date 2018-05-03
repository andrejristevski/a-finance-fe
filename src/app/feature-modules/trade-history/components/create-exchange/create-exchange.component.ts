import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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

  formState = {
    inpCurSelected: {
      touched: false,
      errors: []
    },
    outputCurSelected: {
      touched: false,
      errors: []
    },
    sum: {
      touched: false,
      errors: []
    },
    exchangeRate: {
      touched: false,
      errors: []
    },
    date: {
      touched: false,
      errors: []
    },
    other: {
      touched: false,
      errors: []
    }
  };

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

  formControlChanged(e) {
    debugger;
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

  ifFormInvalid() {
    // must be selected
    if (this.inpCurSelected.length === 0) {
      this.formState.inpCurSelected.errors.push('Input ccy is not selected');
      return true;
    }
    if (this.outputCurSelected.length === 0) {
      this.formState.outputCurSelected.errors.push('Output ccy is not selected');
      return true;
    }

    // cannot be the same
    if (this.inpCurSelected[0].item_id === this.outputCurSelected[0].item_id) {
      this.formState.other.errors.push('Input and out ccy are the same');
      return true;
    } else {
      this.formState.other.errors = [];
    }

    // valid numbers
    if (this.sum <= 0) {
      this.formState.sum.errors.push('Sum must be positive');
      return true;
    }
    if (this.exchangeRate <= 0) {
      this.formState.exchangeRate.errors.push('Rate must be positive');
      return true;
    }

    // valid date
    if (this.date > new Date()) {
      this.formState.date.errors.push(`Date can't be from the feature`);
      return true;
    }

    return false;
  }


  inputCurAdded() {
    this.formState.inpCurSelected.touched = true;
  }

  outputCurAdded() {
    this.formState.outputCurSelected.touched = true;
  }

  onSumChanged() {
    if (this.sum <= 0) {
      this.formState.sum.errors.push('Sum must be positive');
    } else {
      this.formState.sum.errors = [];
    }
  }

  isSecondDateInFeauture(d1, d2) {
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

  onDateChanged() {

    if (this.isSecondDateInFeauture(this.date, new Date())) {
      this.formState.date.errors.push(`Date can't be from the feature`);
    } else {
      this.formState.date.errors = [];
    }
  }

  onRateChanged() {
    if (this.exchangeRate <= 0) {
      this.formState.exchangeRate.errors.push('Rate must be positive');
    } else {
      this.formState.exchangeRate.errors = [];
    }
  }

  createExchange() {
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
