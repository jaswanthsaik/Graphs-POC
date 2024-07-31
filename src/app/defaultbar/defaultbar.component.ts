import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/core';
// ... other imports

@Component({
  selector: 'app-defaultbar',
  templateUrl: './defaultbar.component.html',
  styleUrl: './defaultbar.component.css'
})
export class DefaultbarComponent implements OnInit, OnChanges {
  @Input() chartData: { title: string, xAxis: string[], yAxis: number[] } | null = null;
  
  private myChart!: echarts.ECharts;

  ngOnInit() {
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData'] && this.chartData) {
      this.updateChart();
    }
  }

  initChart() {
    const chartDom = document.getElementById('chart-container');
    if (chartDom) {
      this.myChart = echarts.init(chartDom);
      this.updateChart();
    }
  }

  updateChart() {
    if (this.myChart) {
      const option: echarts.EChartsCoreOption = this.chartData 
        ? this.getDataOption() 
        : this.getDefaultOption();

      this.myChart.setOption(option, true);  // Added true to ensure full reset
    }
  }

  private getDataOption(): echarts.EChartsCoreOption {
    return {
      title: {
        text: this.chartData!.title
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
          type: 'bar'
        }
      ]
    };
  }

  private getDefaultOption(): echarts.EChartsCoreOption {
    return {
      title: { text: 'Default Bar Chart' },
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value' },
      series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }]
    };
  }
}