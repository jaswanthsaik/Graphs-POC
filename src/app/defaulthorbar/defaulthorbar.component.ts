import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke, ApexPlotOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-defaulthorbar',
  templateUrl: './defaulthorbar.component.html',
  styleUrls: ['./defaulthorbar.component.css']
})
export class DefaulthorbarComponent {

  chartSeries: ApexAxisChartSeries = [{
    name: "New Customers",
    data: [10, 20, 30, 40, 50]
  }];

  chartOptions: ApexChart = {
    type: 'bar',
    height: 350,
    width:900
  };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Horizantal Bar Chart",
    align: 'left'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  plotoptions:ApexPlotOptions ={
    bar:{
      horizontal:true
    }
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

}
