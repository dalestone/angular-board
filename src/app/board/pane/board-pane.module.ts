import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPaneComponent } from './board-pane.component';
import { BoardWidgetComponent } from './widget/board-widget.component';
import { BoardAddWidgetComponent } from './widget/add-widget/board-add-widget.component';
import { BoardPaneService } from './board-pane.service';

@NgModule({
    declarations: [
        BoardPaneComponent,
        BoardWidgetComponent,
        BoardAddWidgetComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BoardPaneComponent
    ],
    entryComponents: [
        BoardAddWidgetComponent
    ]
})
export class BoardPaneModule {
    
}