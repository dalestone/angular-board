import { Component, Input, ViewContainerRef, Inject, ComponentFactoryResolver, ApplicationRef, Injector, ElementRef } from '@angular/core';
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
    @Input() pane: IBoardPane;
    
    constructor(private boardService: BoardService,
        private boardPaneService: BoardPaneService) {
                                
    }

    addWidget() {
        this.boardPaneService.addWidget(this.boardService.getRootViewContainerRef());                                
    }

    editPane() {
        console.log('edit pane');
    }   

    deletePane() {
        this.boardService.deletePane(this.pane);
    }
}