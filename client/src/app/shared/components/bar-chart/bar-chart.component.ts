import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { AnalyticsChart } from '../../models/analytics';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements OnInit {
  @Input() charts: AnalyticsChart[] = [];
  @Input() chartColor = '';
  @Input() chartLabel = '';
  @Input() isGain = true;

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = { responsive: true };
  lineChartColors: Color[] = [];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];

  constructor() {}

  ngOnInit(): void {
    this.lineChartColors = [
      {
        borderColor: '',
        backgroundColor: this.chartColor,
      },
    ];

    this.lineChartData = [
      {
        data: this.charts.map((i) => {
          if (this.isGain) {
            return i.gain;
          } else {
            return i.order;
          }
        }),
        label: this.chartLabel,
      },
    ];

    this.lineChartLabels = this.charts.map((i) => i.label);
  }
}
