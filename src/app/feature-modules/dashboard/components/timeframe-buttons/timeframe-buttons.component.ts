import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'timeframe-buttons',
  templateUrl: './timeframe-buttons.component.html',
  styleUrls: ['./timeframe-buttons.component.css']
})
export class TimeframeButtonsComponent implements OnInit {

  @Output() selected = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }


  setTimeFrame(months) {
    this.selected.emit(months);
  }

}
