import { Component } from '@angular/core';
import { SITE } from './app.config';
import { ContextNavItem } from './models/context-nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Test';
  NavItems: ContextNavItem[];
  Globals = SITE

  constructor() {

    this.NavItems = [
      {
        URL: '#',
        Text: 'Item 1',
        Description: 'Desc 1',
        Selected : false
      },
      {
        URL: '#',
        Text: 'Item 2',
        Description: 'Desc 3',
        Selected : false
      }
    ];

  }


}
