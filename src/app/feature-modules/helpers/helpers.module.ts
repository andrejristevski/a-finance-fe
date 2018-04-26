import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';
import { ChartComponent } from './components/chartjschart/chartjschart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleViewComponent, ChartComponent],
  exports: [ToggleViewComponent, ChartComponent]
})
export class HelpersModule { }
