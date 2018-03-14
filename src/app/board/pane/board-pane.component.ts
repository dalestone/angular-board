import { Component, Input } from '@angular/core';
import { IBoardPane } from '../interfaces/IBoardPane';

@Component({
    selector: 'board-pane',
    templateUrl: 'board-pane.component.html',
    styleUrls: [ 'board-pane.component.css' ]
})
export class BoardPaneComponent {
    @Input() pane: IBoardPane;

    constructor() {
        
    }

    addWidget() {

    }

    editPane() {

    }

    deletePane() {

    }
}