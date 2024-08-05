import { Component, NgZone, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexNonAxisChartSeries,
  ApexLegend,
  ApexPlotOptions
} from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') Graphform: NgForm;
  types = [
    { type: 'line', icon: 'assets/linechart.png', name:'Line' },
    { type: 'bar', icon: 'assets/barchart.png', name:'Vert. Bar'},
    { type: 'pie', icon: 'assets/piechart.png', name:'Pie' },
    { type: 'bar', icon: 'assets/hor.barchart.png', name:'Hor. Bar'},
    { type: 'donut', icon: 'assets/donutchart.png', name:'Donut' },
    { type: 'bar', icon: 'assets/vert.stacked.chart.png', name:'Stacked Bar'},
    { type: 'bar', icon: 'assets/vert.group.barchart.png', name:'Column Bar'}
  ];

  Xaxis = ["Accounts", "Subscriptions"];
  Yaxis = ["Total_Cost", "Total_Average_Cost"];
  SelectXaxis = "";
  SelectYaxis = "";
  selectedtype = "";
  selectedtypeName = "";
  text = "";
  Subtext = "";
  Size = "";
  mode = false;

  // default chart options
  chartSeries: ApexAxisChartSeries|ApexNonAxisChartSeries = [];
  chartLabels: string[] = [];
  private startTime: number = 0;
  private endTime: number = 0;
  renderTime: number = 0;

  chartOptions: ApexChart = {
    type: 'line',
    height: 350
  };

  xaxis: ApexXAxis = {
    categories: []
  };

  titleSubtitle: ApexTitleSubtitle = {
    text: "",
    align: 'left'
  };

  dataLabels: ApexDataLabels = {
    enabled: true
  };

  plotOptions: ApexPlotOptions;

  legend: ApexLegend = {
    show: true,
    position: 'right'
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

  constructor() {}

  selectChartType(charttype: any) {
    this.selectedtype = charttype.type;
    this.selectedtypeName = charttype.name;
    this.mode = false;
    this.Graphform.reset();
  }

  generateBulkXAxisData(type: string): string[] {
    const xAxisData: string[] = [];
    for (let i = 1; i <= 50; i++) {
      xAxisData.push(`${type}${i}`);
    }
    return xAxisData;
  }

  generateBulkYAxisData(): number[] {
    const yAxisData: number[] = [];
    for (let i = 1; i <= 50; i++) {
      yAxisData.push(Math.floor(Math.random() * 100) + 50); // Generates random numbers between 50 and 149
    }
    return yAxisData;
  }

  onSave() {
    if (this.SelectXaxis && this.SelectYaxis) {
      const type = this.SelectXaxis === 'Accounts' ? 'Account' : 'Subscription';

      if(this.selectedtypeName === 'Pie' || this.selectedtypeName === 'Donut') {
        this.chartLabels = this.generateBulkXAxisData(type);
        this.chartSeries = this.generateBulkYAxisData();
      } else if (this.selectedtypeName === 'Stacked Bar' || this.selectedtypeName === 'Column Bar') {
        this.xaxis = {
          categories: this.generateBulkXAxisData(type)
        };
        const seriesData = this.generateBulkYAxisData();
        this.chartSeries = [
          {
            name: `${type}1`,
            data: seriesData.slice(0, 10)
          },
          {
            name: `${type}2`,
            data: seriesData.slice(10, 20)
          },
          {
            name: `${type}3`,
            data: seriesData.slice(20, 30)
          },
          {
            name: `${type}4`,
            data: seriesData.slice(30, 40)
          },
          {
            name: `${type}5`,
            data: seriesData.slice(40, 50)
          }
        ];
      } else {
        this.xaxis = {
          categories: this.generateBulkXAxisData(type)
        };
        this.chartSeries = [{
          name: this.SelectYaxis,
          data: this.generateBulkYAxisData()
        }];
      }
      this.startTime = performance.now();
      this.updateChart();
      this.selectedtypeName = 'new';
      this.mode = true;
      this.Graphform.reset();
      setTimeout(() => {
        this.endTime = performance.now();  // End measuring time
        this.renderTime = this.endTime - this.startTime;
        console.log(`Chart rendered in ${this.renderTime} ms`);
      }, 0); // Timeout to let the chart rendering complete
    }
  }

  updateChart() {
    if(this.selectedtypeName === "Stacked Bar") {
      this.chartOptions = {
        type: this.selectedtype as 'bar',
        height: 350,
        stacked: true
      };
    } else {
      this.chartOptions = {
        type: this.selectedtype as 'line' | 'bar' | 'pie' | 'donut',
        height: 350
      };
    }
    if(this.Size == 'small'){
      this.chartOptions.width = 300
    }else if(this.Size == 'medium'){
      this.chartOptions.width = 600
    }else if(this.Size == 'large'){
      this.chartOptions.width = 900
    }
    this.titleSubtitle = {
      text: this.text,
      align: 'left'
    };

    if(this.selectedtypeName === 'Hor. Bar') {
      this.plotOptions = {
        bar: {
          horizontal: true
        }
      }
    }

    this.stroke = {
      curve: 'stepline'
    };
    
  }

  shouldDisplayChart() {
    return this.mode && this.selectedtype !== '' && this.chartSeries.length > 0;
  }
}
