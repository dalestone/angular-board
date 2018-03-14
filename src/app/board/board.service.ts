import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/from';

import { IBoardState } from './interfaces/IBoardState';
import { IBoardPane } from './interfaces/IBoardPane';
import { IBoardConfig } from './interfaces/IBoardConfig';
import { IBoardAction } from './interfaces/IBoardAction';

@Injectable()
export class BoardService {
    private action$ = new Subject();
    private initState: IBoardState = {
        panes: [],
        datasources: []
    };
    private reducer = (state: IBoardState, action: IBoardAction) => {
        switch (action.type) {
            case actionType.INIT_BOARD:
                return {
                    ...state,
                    panes: action.payload.panes,
                    datasources: action.payload.datasources
                };
            case actionType.ADD_PANE:
                return {
                    ...state,
                    panes: [...state.panes, action.payload]
                };
            default:
                return state;
        }
    }

    state$ = this.action$
        .flatMap((action) => action instanceof Observable ? action : Observable.from([action]))
        .startWith(this.initState)
        .scan(this.reducer);


    actionCreator = (func) => (...args) => {
        const action = func.call(null, ...args);
        this.action$.next(action);

        console.log(action.type);

        if (action.payload instanceof Observable) {
            this.action$.next(action.payload);
        }
        return action;
    };

    initBoard(config: IBoardState) {
        this.actionCreator((payload) => ({
            type: actionType.INIT_BOARD,
            payload
        }))({ panes: config.panes, datasources: config.datasources });
    }

    addPane(pane: IBoardPane) {
        this.actionCreator((payload) => ({
            type: actionType.ADD_PANE,
            payload
        }))(pane);
    }

    deletePane(pane: IBoardPane) {

    }
}

export const actionType = {
    INIT_BOARD: 'INIT_BOARD',
    ADD_PANE: 'ADD_PANE',
    DELETE_PANE: 'DELETE_PANE',
    ADD_PANE_WIDGET: 'ADD_PANE_WIDGET',
    DELETE_PANE_WIDGET: 'DELETE_PANE_WIDGET',
    ADD_DATASOURCE: 'ADD_DATASOURCE',
    DELETE_DATASOURCE: 'DELETE_DATASOURCE',
};