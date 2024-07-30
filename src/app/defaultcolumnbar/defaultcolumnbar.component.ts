import { Component } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-defaultcolumnbar',
  templateUrl: './defaultcolumnbar.component.html',
  styleUrl: './defaultcolumnbar.component.css'
})
export class DefaultcolumnbarComponent {

  chartSeries: ApexAxisChartSeries = [{
    name: "Net Profit",
    data: [44, 55, 57, 56, 61]
  },
  {
    name: "Revenue",
    data: [76, 85, 101, 98, 87]
  },
  {
    name: "Free Cash Flow",
    data: [35, 41, 36, 26, 45]
  }];

  chartOptions: ApexChart = {
    type: 'bar',
    height: 350
  };

  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Column Bar Chart",
    align: 'left'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  legend:ApexLegend ={
    show:true,
    position:'right'
  }

}
