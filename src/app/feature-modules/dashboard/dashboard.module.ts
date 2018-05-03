import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateChartComponent } from './components/create-chart/create-chart.component';
import { TimeframeButtonsComponent } from './components/timeframe-buttons/timeframe-buttons.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HelpersModule } from '../helpers/helpers.module';

@NgModule({
  imports: [
    CommonModule,
    MultiselectDropdownModule,
    FormsModule,
    NgDatepickerModule,
    HelpersModule,
    DashboardRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  declarations: [DashboardComponent, CreateChartComponent, 
    TimeframeButtonsComponent]
})
export class DashboardModule { }
