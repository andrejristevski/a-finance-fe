import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateChartComponent } from './components/create-chart/create-chart.component';
import { ChartComponent } from './components/chartjschart/chartjschart.component';
import { TimeframeButtonsComponent } from './components/timeframe-buttons/timeframe-buttons.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
// import { DatepickerModule } from 'ngx-date-picker';

@NgModule({
  imports: [
    CommonModule,
    MultiselectDropdownModule,
    FormsModule,
    // DatepickerModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, CreateChartComponent, ChartComponent,
    TimeframeButtonsComponent]
})
export class DashboardModule { }
