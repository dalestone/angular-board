import { Component, Input } from '@angular/core';
import { IBoardPane } from '../interfaces/IBoardPane';

import { BoardService } from '../board.service';

@Component({
    selector: 'board-pane',
    templateUrl: 'board-pane.component.html',
    styleUrls: [ 'board-pane.component.css' ]
})
export class BoardPaneComponent {
    @Input() pane: IBoardPane;

    constructor(private boardService: BoardService) {
        
    }

    addWidget() {
        console.log('add widget');
    }

    editPane() {
        console.log('edit pane');
    }   

    deletePane() {
        this.boardService.deletePane(this.pane);
    }
}