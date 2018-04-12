import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss']
})
export class ToggleViewComponent implements OnInit {

  isShowing = true;
  label = 'Hide';

  constructor() { }

  ngOnInit() {
  }

  toogleView() {
    this.isShowing = !this.isShowing;
    if (this.isShowing) {
      this.label = 'Hide';
    } else {
      this.label = 'Show';
    }
  }
}
