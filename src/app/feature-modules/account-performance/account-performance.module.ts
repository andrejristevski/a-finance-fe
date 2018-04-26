import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccountPerformanceRoutingModule } from './account-performance-routing.module';
import { AuthGuard } from '../login/auth.guard';
import { AccountPerformanceComponent } from './components/account-performance/account-performance.component';



@NgModule({
  imports: [
    CommonModule,
    AccountPerformanceRoutingModule
  ],
  declarations: [AccountPerformanceComponent]
})
export class AccountPerformanceModule { }
