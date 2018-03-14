import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPaneModule } from './pane/board-pane.module';
import { BoardComponent } from './board.component';
import { BoardService } from './board.service';

@NgModule({
    declarations: [
        BoardComponent
    ],
    imports: [
        CommonModule,
        BoardPaneModule
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