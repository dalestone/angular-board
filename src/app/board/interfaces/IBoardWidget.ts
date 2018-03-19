export interface IBoardWidget {
    title?: string;
    type?: string;
    settings?: any;
}

export enum BoardWidgetType {
    RadialGauge,
    LinearGauge
}

export interface IRadialGaugeConfig {
    pointer: number;
    max: number;
}

export interface ILinearGaugeConfig {
 
}

//TODO(dale): add additional widget configurations