import { Component } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexLegend, ApexDataLabels } from 'ng-apexcharts';

@Component({
  selector: 'app-defaultdonut',
  templateUrl: './defaultdonut.component.html',
  styleUrl: './defaultdonut.component.css'
})
export class DefaultdonutComponent {

  chartSeries: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

  chartLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May"]

  chartOptions: ApexChart = {
    type: 'donut',
    height: 350
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "Donut Chart",
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
