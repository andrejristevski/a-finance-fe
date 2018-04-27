import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../../../../services/network.service';
import { ChartService } from '../../../../services/chart.service';

@Component({
  selector: 'app-account-performance',
  templateUrl: './account-performance.component.html',
  styleUrls: ['./account-performance.component.scss']
})
export class AccountPerformanceComponent implements OnInit {

  constructor(private networkService: NetworkService,
    private chartService: ChartService) { }

  performanceCharts = this.chartService.getPerformanceCharts();

  ngOnInit() {
    this.networkService.getUserPerformance()
      .subscribe(data => {

        // this.performanceChart = { id: 'perfId', data };

        this.chartService.generatePerformanceCharts();
        // generate performance charts
      });
  }

}
