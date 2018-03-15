import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPaneModule } from './pane/board-pane.module';
import { BoardDataSourceModule } from './datasource/board-datasource.module';
import { BoardComponent } from './board.component';

import { BoardService } from './board.service';

@NgModule({
    declarations: [
        BoardComponent
    ],
    imports: [
        CommonModule,
        BoardPaneModule,
        BoardDataSourceModule
    ],
    exports: [
        BoardComponent
    ],
    providers: [
        BoardService
    ]
})
export class BoardModule {
    
}