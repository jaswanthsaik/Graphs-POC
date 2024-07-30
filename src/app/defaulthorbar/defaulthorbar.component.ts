import { Component, OnInit } from '@angular/core';
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
export class DefaulthorbarComponent implements OnInit {

  private myChart!: echarts.ECharts;

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const chartDom = document.getElementById('chart-container');
    if (chartDom) {
      this.myChart = echarts.init(chartDom);
      this.setChartOption();
    }
  }

  setChartOption() {
    const option: echarts.EChartsCoreOption = {
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

    this.myChart.setOption(option);
  }
}


//   chartSeries: ApexAxisChartSeries = [{
//     name: "New Customers",
//     data: [10, 20, 30, 40, 50]
//   }];

//   chartOptions: ApexChart = {
//     type: 'bar',
//     height: 350
//   };

//   xaxis: ApexXAxis = {
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
//   };

//   titleSubtitle: ApexTitleSubtitle = {
//     text: "Horizantal Bar Chart",
//     align: 'left'
//   };

//   dataLabels: ApexDataLabels = {
//     enabled: true
//   };

//   plotoptions:ApexPlotOptions ={
//     bar:{
//       horizontal:true
//     }
//   };

//   stroke: ApexStroke = {
//     curve: 'smooth'
//   };

// }
