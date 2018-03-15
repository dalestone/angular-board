export interface IBoardWidget {
    title?: string;
}

export enum BoardWidgetType {
    Gauge,
    Scatter
}

export interface IGaugeWidgetConfig {
    type: BoardWidgetType;
    title?: string;
    value: number;
    units: any;
    minimum: number;
    maximum: number;
}

export interface IScatterWidgetConfig {
    type: BoardWidgetType;
    title?: string;
    x: number[];
    y: number[]
}

//TODO(dale): add additional widget configurations