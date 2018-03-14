import { IBoardPane } from './IBoardPane';
import { IBoardDataSource } from './IBoardDataSource';

export interface IBoardConfig {
    version: number;
    title: string;
    allowEdit: boolean;
    panes: IBoardPane[];
    datasources: IBoardDataSource[];
}