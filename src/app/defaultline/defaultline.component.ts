import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke } from 'ng-apexcharts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-defaultline',
  templateUrl: './defaultline.component.html',
  styleUrl: './defaultline.component.css'
})
export class DefaultlineComponent implements OnInit, AfterViewInit {
  private chart: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initChart();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  initChart(): void {
    const chartDom = document.getElementById('chart-container')!;
    this.chart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };

    if (option && typeof option === 'object') {
      this.chart.setOption(option);
    }
  }

  onResize(): void {
    if (this.chart) {
      this.chart.resize();
    }
  }
}




//   chartSeries: ApexAxisChartSeries = [{
//     name: "New Customers",
//     data: [10, 20, 30, 40, 50]
//   }];

//   chartOptions: ApexChart = {
//     type: 'line',
//     height: 350
//   };

//   xaxis: ApexXAxis = {
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
//   };

//   titleSubtitle: ApexTitleSubtitle = {
//     text: "Line Chart",
//     align: 'left'
//   };

//   dataLabels: ApexDataLabels = {
//     enabled: true
//   };

//   stroke: ApexStroke = {
//     curve: 'smooth'
//   };

// }
