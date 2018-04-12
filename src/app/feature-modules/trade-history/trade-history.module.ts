import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';

import { TradeHistoryRoutingModule } from './trade-history-routing.module';
import { CreateExchangeComponent } from './components/create-exchange/create-exchange.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { ExchangeHistoryComponent } from './components/exchange-history/exchange-history.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HelpersModule } from '../helpers/helpers.module';

@NgModule({
  imports: [
    CommonModule,
    MultiselectDropdownModule,
    FormsModule,
    NgDatepickerModule,
    HelpersModule,
    TradeHistoryRoutingModule,
  ],
  declarations: [CreateExchangeComponent, TradeHistoryComponent, ExchangeHistoryComponent]
})
export class TradeHistoryModule { }
