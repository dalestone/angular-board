import { Injectable } from '@angular/core';

import * as Plotly from 'plotly.js';

@Injectable()
export class PlotlyService {

    plotGauge(element: any, config: any) {

    }

    plotScatter(element: any, config: any) {
        let trace1: any = {
            x: [1, 2, 3, 4],
            y: [ 10, 15, 13, 17],
            type: 'scatter'
        };

        let trace2: any = {
            x: [1, 2, 3, 4],
            y: [16, 5, 11, 9],
            type: 'scatter'
        };

        let data = [trace1, trace2 ];

        Plotly.newPlot(element, data);
    }

    //TODO(dale): add any additional support graphs
}