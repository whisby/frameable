import { Component } from '@angular/core';
import {SITE } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test Test';
  Globals = SITE
}
