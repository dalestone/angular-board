import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable, } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

import { IBoardState } from './interfaces/IBoardState';
import { IBoardPane } from './interfaces/IBoardPane';
import { IBoardConfig } from './interfaces/IBoardConfig';

@Injectable()
export class BoardService {
    isObservable = obs => obs instanceof Observable;
    action$ = new Subject();

    initState: IBoardState = {
        panes: [],
        datasources: []
    };

    reducer(state: IBoardState, action) {
        console.log(state);
        console.log(action);

        switch (action.type) {
            case actionType.ADD_PANE:
                return {
                    ...state,
                    panes: [...state.panes, action.payload]
                };
            default:
                return state;
        }
    }

    // initBoardState = (initState: IBoardState) => {   
    //   this.state$ = this.action$
    //   //.flatMap((action) => this.isObservable(action) ? action)
    //   .startWith(initState)
    //   .scan(this.reducer);
    // }

    state$ = (initState?: IBoardState) =>
        this.action$
            .startWith(this.initState)
            .scan(this.reducer);


    actionCreator = (func) => (...args) => {
        const action = func.call(null, ...args);
        this.action$.next(action);

        console.log(action);

        if (this.isObservable(action.payload))
            this.action$.next(action.payload);
        return action;
    };

    addPane(pane: IBoardPane) {
        this.actionCreator((payload) => {
            type: actionType.ADD_PANE,
                payload
        })(pane);
    }

    deletePane(pane: IBoardPane) {

    }
}

export const actionType = {
    // INIT_BOARD: 'INIT_BOARD',
    ADD_PANE: 'ADD_PANE',
    DELETE_PANE: 'DELETE_PANE',
    ADD_PANE_WIDGET: 'ADD_PANE_WIDGET',
    DELETE_PANE_WIDGET: 'DELETE_PANE_WIDGET',
    ADD_DATASOURCE: 'ADD_DATASOURCE',
    DELETE_DATASOURCE: 'DELETE_DATASOURCE',
};