import { Component, OnInit, Input } from '@angular/core';
import { ChartService } from '../../../../services/chart.service';
import { ChartUtils } from './chartUtils';

import Chart from 'chart.js';

// Refactor the name to chart component it doesnt need to be Chartjs
@Component({
  selector: 'app-chartjschart',
  templateUrl: './chartjschart.component.html',
  styleUrls: ['./chartjschart.component.css'],
  providers: [ChartUtils]
})
export class ChartComponent implements OnInit {

  constructor(private chartService: ChartService, private chartUtils: ChartUtils) { }

  @Input()
  data: any;

  @Input()
  id: any;

  delete(id) {
    console.log(`deleting  ${id}`);
    this.chartService.deleteChart(id);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    const datasets = this.chartUtils.getChartVal(this.data.datasets);
    this.createChart(this.data.labels, datasets, this.data.average);
  }

  createChart(labels, datasets, average) {

    const el = <HTMLCanvasElement>document.getElementById(this.id);
    const ctx = el.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      // lineAtValue: average,
      data: {
        labels,
        datasets,
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
    });

    // Chart.plugins.register({
    //   config: {
    //     strokeColor: "rgb(255, 0, 0)",
    //     lineWidth: 1,
    //   },
    //   afterDatasetsDraw: function (chartInstance, easing) {
    //     // debugger;
    //     var value = chartInstance.config.lineAtValue;

    //     if (typeof value === 'undefined') return;

    //     var ctx = chartInstance.chart.ctx,
    //       xaxis = chartInstance.scales['x-axis-0'],
    //       yaxis = chartInstance.scales['y-axis-0'];

    //     ctx.save();
    //     ctx.beginPath();
    //     ctx.moveTo(xaxis.left, yaxis.getPixelForValue(value));
    //     ctx.lineWidth = this.config.lineWidth;
    //     ctx.strokeStyle = this.config.strokeColor;
    //     ctx.lineTo(xaxis.right, yaxis.getPixelForValue(value));
    //     ctx.stroke();
    //     ctx.restore();
    //   },
    // });
  }
}