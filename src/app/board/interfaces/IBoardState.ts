import { IBoardPane } from "./IBoardPane";
import { IBoardDataSource } from "./IBoardDataSource";

export interface IBoardState {
    panes: IBoardPane[];
    datasources: IBoardDataSource[];
}