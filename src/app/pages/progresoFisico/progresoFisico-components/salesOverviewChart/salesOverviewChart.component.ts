import { Component, OnInit } from '@angular/core';
import { SalesOverviewChart, salesOverviewChartData } from './salesOverviewChart-data';

@Component({
  selector: 'app-sales-overview-chart',
  templateUrl: './salesOverviewChart.component.html'
})
export class SalesOverviewChartComponent implements OnInit {
  
  salesOverviewChart: Partial<SalesOverviewChart> | any;

  constructor() { 
    this.salesOverviewChart = salesOverviewChartData;
  }

  ngOnInit(): void {
  }
}
