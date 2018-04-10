import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TradeHistoryComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeHistoryRoutingModule { }
