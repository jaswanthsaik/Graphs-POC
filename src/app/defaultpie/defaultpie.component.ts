import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexLegend, ApexDataLabels } from 'ng-apexcharts';

@Component({
  selector: 'app-defaultpie',
  templateUrl: './defaultpie.component.html',
  styleUrl: './defaultpie.component.css'
})
export class DefaultpieComponent {

  chartSeries: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

  chartLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May"]

  chartOptions: ApexChart = {
    type: 'pie',
    height: 350,
    width:900
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Pie Chart",
    align: 'left'
  };

  legend: ApexLegend = {
    show: true,
    position: 'right'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

}
