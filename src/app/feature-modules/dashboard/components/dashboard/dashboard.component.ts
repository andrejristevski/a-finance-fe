import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../../../services/chart.service';
import { UserSettingsService } from '../../../../services/user-settings-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  charts = this.chartService.getCharts();

  constructor(private chartService: ChartService, private userSettingsService: UserSettingsService) {

    // this.userSettingsService.getUserSettings();
  }

  saveCharts() {
    this.chartService.saveCharts();
  }

  ngOnInit() {
  }

}
