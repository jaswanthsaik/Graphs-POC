import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke, ApexLegend, ApexFill } from 'ng-apexcharts';

@Component({
  selector: 'app-default-stackedbar',
  templateUrl: './default-stackedbar.component.html',
  styleUrl: './default-stackedbar.component.css'
})
export class DefaultStackedbarComponent {

  chartSeries: ApexAxisChartSeries = [{
    name: "PRODUCT A",
    data: [44, 55, 41, 67, 22, 43]
  },
  {
    name: "PRODUCT B",
    data: [13, 23, 20, 8, 13, 27]
  },
  {
    name: "PRODUCT C",
    data: [11, 17, 15, 15, 21, 14]
  },
  {
    name: "PRODUCT D",
    data: [21, 7, 25, 13, 22, 8]
  }];

  chartOptions: ApexChart = {
    type: 'bar',
    height: 350,
    width:900,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  };

  xaxis: ApexXAxis = {
    type: "category",
    categories: [
      "01/2011",
      "02/2011",
      "03/2011",
      "04/2011",
      "05/2011",
      "06/2011"
    ]
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Stacked Bar Chart",
    align: 'left'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  legend: ApexLegend = {
    show: true,
    position: 'right'
  };

  fill:ApexFill ={
    opacity:1
  }

}
