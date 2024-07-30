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
  @ViewChild('f') Graphform:NgForm;
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
    this.selectedtypeName = charttype.name
    this.mode = false;
    this.Graphform.reset()
  }
 
  // customization of the graph from the inputs
  onSave() {
    if (this.SelectXaxis == 'Accounts') {
      if(this.selectedtypeName == 'Pie' || this.selectedtypeName == 'Donut'){
        this.chartLabels = ["Account1", "Account2", "Account3", "Account4"];
        if (this.SelectYaxis == "Total_Cost") {
          this.chartSeries = [100, 250, 135, 90];
        } else if (this.SelectYaxis == "Total_Average_Cost") {
          this.chartSeries = [70, 100, 85, 50];
        }
      }else if(this.selectedtypeName=='Stacked Bar'||this.selectedtypeName=='Column Bar'){
        this.xaxis = {
          categories: ["Jan", "Feb", "Mar", "Apr"]
        };
        if(this.SelectYaxis == "Total_Cost"){
          this.chartSeries = [{
            name: "Account1",
            data: [20, 35, 30, 15]
          },
          {
            name: "Account2",
            data: [30, 50, 100, 70]
          },
          {
            name: "Account3",
            data: [10, 25, 35, 65]
          },
          {
            name: "Account4",
            data: [15, 25, 30, 20]
          }];
        }else if(this.SelectYaxis =="Total_Average_Cost"){
          this.chartSeries = [{
            name: "Account1",
            data: [10, 25, 20, 15]
          },
          {
            name: "Account2",
            data: [40, 20, 30, 10]
          },
          {
            name: "Account3",
            data: [30, 25, 20, 10]
          },
          {
            name: "Account4",
            data: [10, 20, 15, 5]
          }];
        }
      } else {
        this.xaxis = {
          categories: ["Account1", "Account2", "Account3", "Account4"]
        };
        if (this.SelectYaxis == "Total_Cost") {
          this.chartSeries = [{
            name: "Total_Cost",
            data: [100, 250, 135, 90]
          }];
        } else if (this.SelectYaxis == "Total_Average_Cost") {
          this.chartSeries = [{
            name: "Total_Average_Cost",
            data: [70, 100, 85, 50]
          }];
        }
      }
    }
    if (this.SelectXaxis == 'Subscriptions') {
      if(this.selectedtype == 'pie' || this.selectedtype == 'donut'){
        this.chartLabels = ["Subscription1", "Subscription2", "Subscription3", "Subscription4"]
        if (this.SelectYaxis == "Total_Cost") {
          this.chartSeries = [100, 250, 135, 90];
        } else if (this.SelectYaxis == "Total_Average_Cost") {
          this.chartSeries = [70, 100, 85, 50];
        }
      }else if(this.selectedtypeName=='Stacked Bar'||this.selectedtypeName=='Column Bar'){
        this.xaxis = {
          categories: ["Jan", "Feb", "Mar", "Apr"]
        };
        if(this.SelectYaxis == "Total_Cost"){
          this.chartSeries = [{
            name: "Subscription1",
            data: [20, 35, 30, 15]
          },
          {
            name: "Subscription2",
            data: [30, 50, 100, 70]
          },
          {
            name: "Subscription3",
            data: [10, 25, 35, 65]
          },
          {
            name: "Subscription4",
            data: [15, 25, 30, 20]
          }];
        }else if(this.SelectYaxis =="Total_Average_Cost"){
          this.chartSeries = [{
            name: "Subscription1",
            data: [10, 25, 20, 15]
          },
          {
            name: "Subscription2",
            data: [40, 20, 30, 10]
          },
          {
            name: "Subscription3",
            data: [30, 25, 20, 10]
          },
          {
            name: "Subscription4",
            data: [10, 20, 15, 5]
          }];
        }
      } 
      else{
        this.xaxis = {
          categories: ["Subscription1", "Subscription2", "Subscription3", "Subscription4"]
        };
        if (this.SelectYaxis == "Total_Cost") {
          this.chartSeries = [{
            name: "Total_Cost",
            data: [100, 250, 135, 90]
          }];
        } else if (this.SelectYaxis == "Total_Average_Cost") {
          this.chartSeries = [{
            name: "Total_Average_Cost",
            data: [70, 100, 85, 50]
          }];
        }
      }
    }
    this.updateChart();
    this.selectedtypeName = 'new'
    this.mode = true
    this.Graphform.reset()
  }
 
  // function to update the chart options
  updateChart() {
    if(this.selectedtypeName == "Stacked Bar"){
      this.chartOptions ={
        type:this.selectedtype as 'bar',
        height:350,
        stacked:true
      }
    }else{
      this.chartOptions = {
        type: this.selectedtype as 'line' | 'bar' | 'pie' | 'donut',
        height: 350
      };
    }
    this.titleSubtitle = {
      text: this.text,
      align: 'left'
    };

    if(this.selectedtypeName=='Hor. Bar'){
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
 
  // check if chart should be displayed
  shouldDisplayChart() {
    return this.mode && this.selectedtype !== ''&& this.chartSeries.length > 0;
  }
}
