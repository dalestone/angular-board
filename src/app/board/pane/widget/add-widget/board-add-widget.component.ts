import { Component, ComponentRef, Input } from '@angular/core';

@Component({
    selector: 'board-add-widget',
    templateUrl: 'board-add-widget.component.html',
    styleUrls: [ 'board-add-widget.component.css' ]
})
export class BoardAddWidgetComponent {
    @Input() componentRef: ComponentRef<BoardAddWidgetComponent>;

    destroy() {
        this.componentRef.destroy();
    }
}