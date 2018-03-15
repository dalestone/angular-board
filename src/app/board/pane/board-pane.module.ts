import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardPaneComponent } from './board-pane.component';
import { BoardWidgetComponent } from './widget/board-widget.component';

@NgModule({
    declarations: [
        BoardPaneComponent,
        BoardWidgetComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BoardPaneComponent
    ]
})
export class BoardPaneModule {
    
}