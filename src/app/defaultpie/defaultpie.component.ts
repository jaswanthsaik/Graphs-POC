import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
// import { ApexNonAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexLegend, ApexDataLabels } from 'ng-apexcharts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-defaultpie',
  templateUrl: './defaultpie.component.html',
  styleUrl: './defaultpie.component.css'
})
export class DefaultpieComponent implements OnInit, AfterViewInit, OnDestroy {
  private myChart: echarts.ECharts | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    if (this.myChart) {
      this.myChart.dispose();
    }
  }

  initChart(): void {
    const chartDom = document.getElementById('main')!;
    this.myChart = echarts.init(chartDom);
    const option: echarts.EChartsOption = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    this.myChart.setOption(option);
  }

  onResize = (): void => {
    if (this.myChart) {
      this.myChart.resize();
    }
  }
}

//   chartSeries: ApexNonAxisChartSeries = [44, 55, 13, 43, 22];

//   chartLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May"]

//   chartOptions: ApexChart = {
//     type: 'pie',
//     height: 350
//   };

//   titleSubtitle: ApexTitleSubtitle = {
//     text: "Pie Chart",
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
