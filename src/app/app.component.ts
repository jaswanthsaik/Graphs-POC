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
  ApexLegend
} from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') Graphform:NgForm;
  types = [
    { type: 'line', icon: 'assets/linechart.png', name:'Line' },
    { type: 'bar', icon: 'assets/barchart.png', name:'Vert. Bar'},
    { type: 'pie', icon: 'assets/piechart.png', name:'Pie' }
  ];
 
  Xaxis = ["Accounts", "Subscriptions"];
  Yaxis = ["Total_Cost", "Total_Average_Cost"];
  SelectXaxis = "";
  SelectYaxis = "";
  selectedtype = "";
  text = "";
  Subtext = "";
  mode = false;
 
  // default chart options
  chartSeries: ApexAxisChartSeries|ApexNonAxisChartSeries = [];
  chartLabels: string[] = [];
 
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

  legend: ApexLegend = {
    show: true,
    position: 'right'
  };
 
  stroke: ApexStroke = {
    curve: 'smooth'
  };
 
  constructor() {}

  selectChartType(type: string) {
    this.selectedtype = type;
    this.mode = false;
    this.Graphform.reset()
  }
 
  // customization of the graph from the inputs
  onSave() {
    if (this.SelectXaxis == 'Accounts') {
      if(this.selectedtype == 'pie'){
        this.chartLabels = ["Account1", "Account2", "Account3", "Account4"]
      }
      else{
        this.xaxis = {
          categories: ["Account1", "Account2", "Account3", "Account4"]
        };
      }
      if (this.SelectYaxis == "Total_Cost") {
        if(this.selectedtype == 'pie'){
          this.chartSeries = [100, 250, 135, 90]
        }
        else{
          this.chartSeries = [{
            name: "Total_Cost",
            data: [100, 250, 135, 90]
          }];
        }
      }
      if (this.SelectYaxis == "Total_Average_Cost") {
        if(this.selectedtype == 'pie'){
          this.chartSeries = [70, 100, 85, 50]
        }
        else{
          this.chartSeries = [{
            name: "Total_Average_Cost",
            data: [70, 100, 85, 50]
          }];
        }
      }
    }
    if (this.SelectXaxis == 'Subscriptions') {
      if(this.selectedtype == 'pie'){
        this.chartLabels = ["Subscription1", "Subscription2", "Subscription3", "Subscription4"]
      }
      else{
        this.xaxis = {
          categories: ["Subscription1", "Subscription2", "Subscription3", "Subscription4"]
        };
      }
      if (this.SelectYaxis == "Total_Cost") {
        if(this.selectedtype == 'pie'){
          this.chartSeries = [100, 250, 135, 90]
        }
        else{
          this.chartSeries = [{
            name: "Total_Cost",
            data: [100, 250, 135, 90]
          }];
        }
      }
      if (this.SelectYaxis == "Total_Average_Cost") {
        if(this.selectedtype == 'pie'){
          this.chartSeries = [70, 100, 85, 50]
        }
        else{
          this.chartSeries = [{
            name: "Total_Average_Cost",
            data: [70, 100, 85, 50]
          }];
        }
      }
    }
    this.updateChart();
    this.selectedtype = 'new'
    this.mode = true
    this.Graphform.reset()
  }
 
  // function to update the chart options
  updateChart() {
    this.chartOptions = {
      type: this.selectedtype as 'line' | 'bar' | 'pie',
      height: 350
    };
    this.titleSubtitle = {
      text: this.text,
      align: 'left'
    };
    this.dataLabels = {
      enabled: true
    };
    this.stroke = {
      curve: 'stepline'
    };
  }
 
  // check if chart should be displayed
  shouldDisplayChart() {
    return this.mode && this.chartSeries.length > 0;
  }
}
