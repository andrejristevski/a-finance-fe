import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';

import { TradeHistoryRoutingModule } from './trade-history-routing.module';
import { CreateExchangeComponent } from './components/create-exchange/create-exchange.component';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';

@NgModule({
  imports: [
    CommonModule,
    MultiselectDropdownModule,
    FormsModule,
    TradeHistoryRoutingModule,
  ],
  declarations: [ CreateExchangeComponent, TradeHistoryComponent]
})
export class TradeHistoryModule { }
