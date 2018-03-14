import { Component } from '@angular/core';
import { IBoardConfig } from './board/interfaces/IBoardConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: IBoardConfig = {
    version: 1,
    title: 'My Board',
    allowEdit: true,
    panes: [
      { title: 'pane 1' },
      { title: 'pane 2' }
    ],
    datasources: []
  };  
}
