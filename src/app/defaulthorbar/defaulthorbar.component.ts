import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

@Component({
  selector: 'app-defaulthorbar',
  templateUrl: './defaulthorbar.component.html',
  styleUrls: ['./defaulthorbar.component.css']
})
export class DefaulthorbarComponent implements OnInit, OnChanges {
  @Input() chartData: { title: string, xAxis: string[], yAxis: number[] } | null = null;

  private myChart!: echarts.ECharts;

  ngOnInit() {
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData'] && this.myChart) {
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
    const option = this.chartData ? this.getDataOption() : this.getDefaultOption();
    this.myChart.setOption(option, true);
  }

  getDataOption(): echarts.EChartsCoreOption {
    return {
      title: {
        text: this.chartData!.title
      },
      tooltip: {
        trigger: 'axis',
      },
      yAxis: {
        type: 'category',
        data: this.chartData!.xAxis
      },
      xAxis: {
        type: 'value'
      },
      series: [
        {
          data: this.chartData!.yAxis,
          type: 'bar',
          orientation: 'horizontal'
        }
      ]
    };
  }

  getDefaultOption(): echarts.EChartsCoreOption {
    return {
      title: {
        text: 'Default Horizontal Bar Chart'
      },
      tooltip: {
        trigger: 'axis',
      },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      xAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          orientation: 'horizontal'
        }
      ]
    };
  }
}
