import { ComponentFactoryResolver, Injectable, ViewContainerRef, ComponentRef } from '@angular/core';

import { BoardAddWidgetComponent } from './widget/add-widget/board-add-widget.component';

@Injectable()
export class BoardPaneService {

    constructor(private factoryResolver: ComponentFactoryResolver) {

    }

    addWidget(viewContainerRef: ViewContainerRef) {
        const factory = this.factoryResolver.resolveComponentFactory(BoardAddWidgetComponent);
        const component = factory.create(viewContainerRef.parentInjector);
        viewContainerRef.insert(component.hostView);
        component.instance.componentRef = component;
    }
}