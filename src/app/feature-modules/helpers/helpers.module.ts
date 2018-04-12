import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleViewComponent } from './components/toggle-view/toggle-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToggleViewComponent],
  exports: [ToggleViewComponent]
})
export class HelpersModule { }
