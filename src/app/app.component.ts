import { Component, NgZone, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') Graphform:NgForm;
  chartData: { title: string, xAxis: string[], yAxis: number[] } | null = null;
  types = [
    { type: 'line', icon: 'assets/linechart.png', name:'Line' },
    { type: 'bar', icon: 'assets/barchart.png', name:'Vert. Bar'},
    { type: 'pie', icon: 'assets/piechart.png', name:'Pie' },
    { type: 'bar', icon: 'assets/hor.barchart.png', name:'Hor. Bar'},
    // { type: 'donut', icon: 'assets/donutchart.png', name:'Donut' },
    // { type: 'bar', icon: 'assets/vert.stacked.chart.png', name:'Stacked Bar'},
    // { type: 'bar', icon: 'assets/vert.group.barchart.png', name:'Column Bar'}
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
  chartLabels: string[] = [];
  xaxisData: string[] = [];
  yaxisData: number[] = [];
 
 
  constructor() {}
  resetChartState() {
    this.chartData = null;
    this.mode = false;
  }

  selectChartType(charttype: any) {
    this.selectedtype = charttype.type;
    this.selectedtypeName = charttype.name
    this.mode = false;
    this.Graphform.reset();
    this.resetChartState();
  }
  onSave() {
    if (this.SelectXaxis && this.SelectYaxis) {
      if (this.SelectXaxis === 'Accounts') {
        this.xaxisData = ["Account1", "Account2", "Account3", "Account4"];
      } else if (this.SelectXaxis === 'Subscriptions') {
        this.xaxisData = ["Subscription1", "Subscription2", "Subscription3", "Subscription4"];
      }
   
      if (this.SelectYaxis === "Total_Cost") {
        this.yaxisData = [100, 250, 135, 90];
      } else if (this.SelectYaxis === "Total_Average_Cost") {
        this.yaxisData = [70, 100, 85, 50];
      }
   
      this.chartData = {
        title: this.text,
        xAxis: this.xaxisData,
        yAxis: this.yaxisData
      };
  
      this.mode = true;
      this.Graphform.reset();
    }
  }
}