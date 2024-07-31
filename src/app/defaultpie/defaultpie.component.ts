import { AfterViewInit, Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-defaultpie',
  templateUrl: './defaultpie.component.html',
  styleUrl: './defaultpie.component.css'
})
export class DefaultpieComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() chartData: { title: string, xAxis: string[], yAxis: number[] } | null = null;

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.myChart) {
      this.updateChart();
    }
  }

  initChart(): void {
    const chartDom = document.getElementById('main')!;
    this.myChart = echarts.init(chartDom);
    this.updateChart();
  }

  updateChart(): void {
    if (this.myChart) {
      const option = this.chartData ? this.getDataOption() : this.getDefaultOption();
      this.myChart.setOption(option, true);
    }
  }

  private getDataOption(): echarts.EChartsOption {
    return {
      title: {
        text: this.chartData!.title,
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
          name: 'Data',
          type: 'pie',
          radius: '50%',
          data: this.chartData!.xAxis.map((label, index) => ({
            value: this.chartData!.yAxis[index],
            name: label
          })),
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
  }

  private getDefaultOption(): echarts.EChartsOption {
    return {
      title: {
        text: 'Default Pie Chart',
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
  }

  onResize = (): void => {
    if (this.myChart) {
      this.myChart.resize();
    }
  }
}