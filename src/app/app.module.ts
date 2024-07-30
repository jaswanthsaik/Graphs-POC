import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultbarComponent } from './defaultbar/defaultbar.component';
import { DefaultlineComponent } from './defaultline/defaultline.component';
import { DefaultpieComponent } from './defaultpie/defaultpie.component';
import { DefaultStackedbarComponent } from './default-stackedbar/default-stackedbar.component';
import { DefaultdonutComponent } from './defaultdonut/defaultdonut.component';
import { DefaultcolumnbarComponent } from './defaultcolumnbar/defaultcolumnbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultbarComponent,
    DefaultlineComponent,
    DefaultpieComponent,
    DefaultStackedbarComponent,
    DefaultdonutComponent,
    DefaultcolumnbarComponent
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
