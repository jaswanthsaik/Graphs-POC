import { Component, NgZone } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke
} from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  types = [
    { type: 'line', icon: 'assets/line.png' },
    { type: 'bar', icon: 'assets/bar.png' },
    { type: 'pie', icon: 'assets/pie.png' }
  ];
 
  Xaxis = ["Accounts", "Subscriptions"];
  Yaxis = ["Total_Cost", "Total_Average_Cost"];
  SelectXaxis = "";
  SelectYaxis = "";
  selectedtype = ""; // no default chart type
  text = "";
  mode = false;
 
  // default chart options
  public chartSeries: ApexAxisChartSeries = [];
 
  public chartOptions: ApexChart = {
    type: 'line',
    height: 350
  };
 
  public xaxis: ApexXAxis = {
    categories: []
  };
 
  public titleSubtitle: ApexTitleSubtitle = {
    text: "",
    align: 'left'
  };
 
  public dataLabels: ApexDataLabels = {
    enabled: true
  };
 
  public stroke: ApexStroke = {
    curve: 'smooth'
  };
 
  constructor() {}
 
  // customization of the graph from the inputs
  onSave() {
    if (this.SelectXaxis == 'Accounts') {
      this.xaxis = {
        categories: ["Account1", "Account2", "Account3", "Account4"]
      };
      if (this.SelectYaxis == "Total_Cost") {
        this.chartSeries = [{
          name: "Total_Cost",
          data: [100, 250, 135, 90]
        }];
      }
      if (this.SelectYaxis == "Total_Average_Cost") {
        this.chartSeries = [{
          name: "Total_Average_Cost",
          data: [70, 100, 85, 50]
        }];
      }
    }
    if (this.SelectXaxis == 'Subscriptions') {
      this.xaxis = {
        categories: ["Subscription1", "Subscription2", "Subscription3", "Subscription4"]
      };
      if (this.SelectYaxis == "Total_Cost") {
        this.chartSeries = [{
          name: "Total_Cost",
          data: [100, 250, 135, 90]
        }];
      }
      if (this.SelectYaxis == "Total_Average_Cost") {
        this.chartSeries = [{
          name: "Total_Average_Cost",
          data: [70, 100, 85, 50]
        }];
      }
    }
    this.updateChart();
  }
 
  // update chart type and other options
  selectChartType(type: string) {
    this.selectedtype = type;
    this.updateChart();
  }
 
  // function to update the chart options
  updateChart() {
    this.chartOptions = {
      type: this.selectedtype as 'line' | 'bar' | 'pie',
      height: 400
    };
    this.titleSubtitle = {
      text: this.text,
      align: 'center'
    };
    this.dataLabels = {
      enabled: false
    };
    this.stroke = {
      curve: 'stepline'
    };
  }
 
  // check if chart should be displayed
  shouldDisplayChart() {
    return this.selectedtype !== "" && this.chartSeries.length > 0;
  }
}
