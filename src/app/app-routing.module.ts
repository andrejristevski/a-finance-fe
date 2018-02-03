import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/feature-modules/login/login.module#LoginModule'
  },
  {
    path: 'trade-history',
    loadChildren: 'app/feature-modules/trade-history/trade-history.module#TradeHistoryModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
