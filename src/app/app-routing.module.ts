import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './feature-modules/login/components/login.component';
import { AuthGuard } from './feature-modules/login/auth.guard';

const routes: Routes = [
  {
    path: 'trade-history',
    loadChildren: 'app/feature-modules/trade-history/trade-history.module#TradeHistoryModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: 'app/feature-modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
