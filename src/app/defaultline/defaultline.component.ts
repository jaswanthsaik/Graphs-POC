import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke } from 'ng-apexcharts';

@Component({
  selector: 'app-defaultline',
  standalone: true,
  imports: [],
  templateUrl: './defaultline.component.html',
  styleUrl: './defaultline.component.css'
})
export class DefaultlineComponent {

  chartSeries: ApexAxisChartSeries = [{
    name: "New Customers",
    data: [10, 20, 30, 40, 50]
  }];

  chartOptions: ApexChart = {
    type: 'line',
    height: 350
  };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Line Chart",
    align: 'left'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

}
