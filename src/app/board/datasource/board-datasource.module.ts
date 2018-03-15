import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardDataSourcesComponent } from './board-datasources.component';

@NgModule({
    declarations: [
        BoardDataSourcesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BoardDataSourcesComponent
    ],
    providers: []
})
export class BoardDataSourceModule {

}