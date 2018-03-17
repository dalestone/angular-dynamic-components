import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { LabelModule } from '@progress/kendo-angular-label';

import { AppComponent } from './app.component';
import { KendoRadialGaugeWidgetComponent } from './kendo/kendo-radialgauge-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    KendoRadialGaugeWidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputsModule,
    GaugesModule,
    LabelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    KendoRadialGaugeWidgetComponent
  ]
})
export class AppModule { }
