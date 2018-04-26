import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { AccountPerformanceComponent } from './components/account-performance/account-performance.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPerformanceComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPerformanceRoutingModule { }
