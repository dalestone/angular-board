import { Component, Input } from '@angular/core';

import { IBoardConfig } from './interfaces/IBoardConfig';
import { BoardService } from './board.service';
import { IBoardState } from './interfaces/IBoardState';

@Component({
    selector: 'board',
    templateUrl: 'board.component.html',
    styleUrls: ['board.component.css']
})
export class BoardComponent {
    @Input() config: IBoardConfig;

    constructor(private boardService: BoardService) {

    }

    ngOnInit() {
        console.log(this.config);

        this.boardService.state$({
            panes: this.config.panes,
            datasources: this.config.datasources
        }).subscribe((state: IBoardState) => {
            console.log("state changed", state);
        });
    }

    addPane() {
        this.boardService.addPane({ title: '' });
    }
}