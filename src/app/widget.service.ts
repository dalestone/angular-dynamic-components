import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    ViewContainerRef,
    ComponentRef
} from '@angular/core';

import { KendoRadialGaugeWidgetComponent } from './kendo/kendo-radialgauge-widget.component';

@Injectable()
export class WidgetService {
    factoryResolver: ComponentFactoryResolver;
    rootViewContainer: ViewContainerRef;
    widgets: Array<Widget> = [];

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver;
    }

    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }

    addKendoRadilGaugeWidget() {
        const factory = this.factoryResolver.resolveComponentFactory(KendoRadialGaugeWidgetComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        //component.instance.
        this.rootViewContainer.insert(component.hostView);  
        this.widgets.push({ component });
    }

    removeKendoRadialGaugeWidget() {
        this.widgets[0].component.destroy();
        this.widgets.splice(0, 1);
    }
}

interface Widget {
    component: ComponentRef<any>;
}