import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke } from 'ng-apexcharts';

@Component({
  selector: 'app-defaultbar',
  standalone: true,
  imports: [],
  templateUrl: './defaultbar.component.html',
  styleUrl: './defaultbar.component.css'
})
export class DefaultbarComponent {

  chartSeries: ApexAxisChartSeries = [{
    name: "New Customers",
    data: [10, 20, 30, 40, 50]
  }];

  chartOptions: ApexChart = {
    type: 'bar',
    height: 350
  };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Bar Chart",
    align: 'left'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

}
