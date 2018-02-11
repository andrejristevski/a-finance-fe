import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeframeButtonsComponent } from './timeframe-buttons.component';

describe('TimeframeButtonsComponent', () => {
  let component: TimeframeButtonsComponent;
  let fixture: ComponentFixture<TimeframeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeframeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeframeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
