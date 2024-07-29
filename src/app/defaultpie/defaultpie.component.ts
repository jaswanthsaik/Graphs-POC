import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexLegend } from 'ng-apexcharts';

@Component({
  selector: 'app-defaultpie',
  standalone: true,
  imports: [],
  templateUrl: './defaultpie.component.html',
  styleUrl: './defaultpie.component.css'
})
export class DefaultpieComponent {

  chartSeries: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

  chartOptions: ApexChart = {
    type: 'pie',
    height: 350
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Pie Chart",
    align: 'left'
  };

  legend: ApexLegend = {
    show: true,
    position: 'right'
  };

}
