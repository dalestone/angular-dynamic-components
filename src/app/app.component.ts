import { Component, ViewContainerRef, Inject } from '@angular/core';

import { WidgetService } from './widget.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WidgetService ]
})
export class AppComponent {
  public value: number = 10;

  constructor(private widgetService: WidgetService,
    private viewContainerRef: ViewContainerRef) {
      widgetService.setRootViewContainerRef(viewContainerRef);
      
  }

  ngOnInit() {

  }

  addKendoRadialGauge() {
    this.widgetService.addKendoRadilGaugeWidget();
  }

  removeKendoRadialGauge() {
    this.widgetService.removeKendoRadialGaugeWidget();
  }
}
