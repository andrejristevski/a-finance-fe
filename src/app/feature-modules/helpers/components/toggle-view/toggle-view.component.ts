import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss']
})
export class ToggleViewComponent implements OnInit {

  isShowing = true;
  @Input() name = '';

  label;


  constructor() { }

  ngOnInit() {
    this.label = `Hide ${this.name}`;
  }

  toogleView() {
    this.isShowing = !this.isShowing;
    if (this.isShowing) {
      this.label = `Hide ${this.name}`;
    } else {
      this.label = `Show ${this.name}`;
    }
  }
}
