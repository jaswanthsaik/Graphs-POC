import { AfterViewInit, Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-defaultline',
  templateUrl: './defaultline.component.html',
  styleUrl: './defaultline.component.css'
})
export class DefaultlineComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() chartData: { title: string, xAxis: string[], yAxis: number[] } | null = null;
  
  private chart: echarts.ECharts | null = null;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initChart();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && this.chart) {
      this.updateChart();
    }
  }

  initChart(): void {
    const chartDom = document.getElementById('chart-container')!;
    this.chart = echarts.init(chartDom, undefined, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    this.updateChart();
  }

  updateChart(): void {
    if (this.chart) {
      const option = this.chartData ? this.getDataOption() : this.getDefaultOption();
      this.chart.setOption(option, true);
    }
  }

  private getDataOption(): echarts.EChartsOption {
    return {
      title: {
        text: this.chartData!.title
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: this.chartData!.xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: this.chartData!.yAxis,
          type: 'line'
        }
      ]
    };
  }

  private getDefaultOption(): echarts.EChartsOption {
    return {
      title: { text: 'Default Line Chart' },
      tooltip: {
        trigger: 'axis',
      },
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
  }

  onResize(): void {
    if (this.chart) {
      this.chart.resize();
    }
  }
}