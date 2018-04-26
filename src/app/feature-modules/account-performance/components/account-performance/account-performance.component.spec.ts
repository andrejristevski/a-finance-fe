import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPerformanceComponent } from './account-performance.component';

describe('AccountPerformanceComponent', () => {
  let component: AccountPerformanceComponent;
  let fixture: ComponentFixture<AccountPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
