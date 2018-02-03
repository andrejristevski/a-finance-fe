import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradeHistoryRoutingModule } from './trade-history-routing.module';
import { TestComComponent } from './components/test-com/test-com.component';

@NgModule({
  imports: [
    CommonModule,
    TradeHistoryRoutingModule
  ],
  declarations: [TestComComponent]
})
export class TradeHistoryModule { }
