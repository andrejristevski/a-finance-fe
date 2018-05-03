import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';
import { ChartComponent } from './components/chartjschart/chartjschart.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [ToggleViewComponent, ChartComponent],
  exports: [ToggleViewComponent, ChartComponent, NgMultiSelectDropDownModule]
})
export class HelpersModule { }
