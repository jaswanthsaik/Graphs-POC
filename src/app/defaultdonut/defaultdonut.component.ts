import { Component, OnInit } from '@angular/core';
// import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexLegend, ApexDataLabels } from 'ng-apexcharts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-defaultdonut',
  templateUrl: './defaultdonut.component.html',
  styleUrl: './defaultdonut.component.css'
})
export class DefaultdonutComponent implements OnInit {

  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}

//   chartSeries: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

//   chartLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May"]

//   chartOptions: ApexChart = {
//     type: 'donut',
//     height: 350
//   };

//   titleSubtitle: ApexTitleSubtitle = {
//     text: "Donut Chart",
//     align: 'left'
//   };

//   legend: ApexLegend = {
//     show: true,
//     position: 'right'
//   };

//   dataLabels: ApexDataLabels = {
//     enabled: true
//   };

// }
