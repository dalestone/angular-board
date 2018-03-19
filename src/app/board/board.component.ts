import { Component, Input } from '@angular/core';

import { IBoardConfig } from './interfaces/IBoardConfig';
import { BoardService } from './board.service';
import { IBoardState } from './interfaces/IBoardState';
import { IBoardPane } from './interfaces/IBoardPane';
import { IBoardDataSource } from './interfaces/IBoardDataSource';

@Component({
    selector: 'board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css']
})
export class BoardComponent {
    @Input() config: IBoardConfig;
    panes: IBoardPane[];
    datasources: IBoardDataSource[];

    constructor(private boardService: BoardService) {
        this.boardService.state$.subscribe((state: IBoardState) => {
            this.panes = state.panes;
            this.datasources = state.datasources;
        });
    }

    ngOnInit() {
        this.boardService.initBoard(this.config);
    }

    addPane() {
        this.boardService.addPane({ title: '' });
    }
}