import { Component, Input, ViewContainerRef, Inject, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, ElementRef, Output, EventEmitter } from '@angular/core';
import { IBoardPane } from '../interfaces/IBoardPane';

import { BoardService } from '../board.service';
import { BoardPaneService } from './board-pane.service';

@Component({
    selector: 'board-pane',
    templateUrl: 'board-pane.component.html',
    styleUrls: [ 'board-pane.component.css' ],
    providers: [ BoardPaneService ]
})
export class BoardPaneComponent {
    @Input() index: number;
    @Input() pane: IBoardPane;

    constructor(
        private boardService: BoardService,
        private boardPaneService: BoardPaneService) {
                                
    }

    addWidget() {
        this.boardPaneService.addWidget(this.boardService.getRootViewContainerRef());                                
    }

    editPane() {
        console.log('edit pane');
    }   

    deletePane() {
        this.boardService.deletePane(this.index);
    }
}