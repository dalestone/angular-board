import { Component, ComponentRef, Input } from '@angular/core';
import { IBoardWidget } from '../../../interfaces/IBoardWidget';

@Component({
    selector: 'board-add-widget',
    templateUrl: 'board-add-widget.component.html',
    styleUrls: [ 'board-add-widget.component.css' ]
})
export class BoardAddWidgetComponent {
    @Input() componentRef: ComponentRef<BoardAddWidgetComponent>;
    widget: IBoardWidget = {
        type: undefined
    };
    types = types;

    save() {
        console.log(this.widget);
    }

    getTypeProperties() {
        return this.types.find(t => t.value === this.widget.type)
    }

    destroy() {
        this.componentRef.destroy();
    }
}

const types = [
    { 
        label: 'Radial Gauge',
        value: 'radial_gauge',
        settings: [
            { key: 'prop1' },
            { key: 'prop2' }
        ]
    },
    {
        label: 'Linear Gauge',
        value: 'linear_gauge',
        settings: [
            { key: 'prop1' }
        ]
    }
];