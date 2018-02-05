import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComComponent } from './components/test-com/test-com.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TestComComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeHistoryRoutingModule { }
