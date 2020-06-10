
import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { ITotal } from '../models/ITotal';
import { ChartOptions, ChartType, ChartLegendOptions } from 'chart.js';
import { Label, SingleDataSet, ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filterChoice: string = "0";
  total: ITotal;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#FFFFFF",
        fontSize: 15
      },
      position: 'left',
      align: "center"
    }
  };
  public pieChartLabels: Label[] = [['Cases'], ['Recoveries'], 'Deaths'];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
  constructor(private dashboardService: DashboardService, private chartTheme: ThemeService) { 
  }

  ngOnInit(): void {
    this.dashboardService.getTotal().subscribe(response => {
      this.total = response.data;
      this.pieChartData = [this.total.cases, this.total.recoveries, this.total.deaths];
    });
  }

  changeFilter() {
    if (this.filterChoice == "0")
    {
      this.pieChartData = [this.total.cases, this.total.recoveries, this.total.deaths];
    }
    else {
      this.pieChartData = [this.total.cases_today, this.total.recoveries_today, this.total.deaths_today];
    }
  }

}
