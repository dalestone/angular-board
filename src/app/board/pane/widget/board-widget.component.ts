import { Component, Input } from '@angular/core';
import { IBoardWidget } from '../../interfaces/IBoardWidget';

@Component({
    selector: 'board-widget',
    templateUrl: 'board-widget.component.html'
})
export class BoardWidgetComponent {
    @Input() widget: IBoardWidget;
}