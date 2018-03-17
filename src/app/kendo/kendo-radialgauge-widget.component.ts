import { Component, Input } from '@angular/core';

import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
    selector: 'kendo-radialgauge-widget',
    templateUrl: 'kendo-radialgauge-widget.component.html'
})
export class KendoRadialGaugeWidgetComponent {
    @Input() pointer: number = 0;
    @Input() scale: number = 100;

    ngOnInit() {
        IntervalObservable.create(500).subscribe(() => {
            this.pointer = Math.random() * 10 + Math.random() * 100 + 10 * Math.random()
        });
    }
}