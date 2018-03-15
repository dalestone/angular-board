import { IBoardWidget } from "./IBoardWidget";

export interface IBoardPane {
    title?: string;
    widgets?: IBoardWidget[];
}