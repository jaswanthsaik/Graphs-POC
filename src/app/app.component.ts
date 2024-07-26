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
  types =["pie","bar","line"]
  Xaxis = ["Accounts","Subscribtions"]
  Yaxis = ["Total_Cost","Total_Average_Cost"]
  SelectXaxis =""
  SelectYaxis = ""
  selectedtype =""
  text=""
  mode =false

  constructor(){}

  //default chart options
  public chartSeries: ApexAxisChartSeries = [{
    name: "Series 1",
    data: [10, 20, 30, 40, 50]
  }];

  public chartOptions: ApexChart = {
    type: 'line',
    height: 350
  };

  public xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
  };

  public titleSubtitle: ApexTitleSubtitle = {
    text: "Dynamic Chart",
    align: 'left'
  };

  public dataLabels: ApexDataLabels = {
    enabled: true
  };

  public stroke: ApexStroke = {
    curve: 'smooth'
  };

  //customization of the graph from the inputs
  onSave() {
    if(this.SelectXaxis == 'Accounts'){
      this.xaxis = {
        categories: ["Account1","Account2","Account3","Account4"]
      };
      if(this.SelectYaxis == "Total_Cost"){
        this.chartSeries = [{
          name: "Total_Cost",
          data: [100, 250, 135, 90]
        }];      
      }
      if(this.SelectYaxis == "Total_Average_Cost"){
        this.chartSeries = [{
          name: "Total_Average_Cost",
          data: [70,100,85,50]
        }]; 
      }
    }
    if(this.SelectXaxis == 'Subscribtions'){
      this.xaxis = {
        categories: ["Subscription1","Subscription2","Subscription3","Subscription4"]
      }; 
      if(this.SelectYaxis == "Total_Cost"){
        this.chartSeries = [{
          name: "Total_Cost",
          data: [100, 250, 135, 90]
        }];      
      }
      if(this.SelectYaxis == "Total_Average_Cost"){
        this.chartSeries = [{
          name: "Total_Average_Cost",
          data: [70,100,85,50]
        }]; 
      }
    }
    this.chartOptions = {
      type: this.selectedtype as 'line' | 'bar' | 'area' | 'radar',
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
}
