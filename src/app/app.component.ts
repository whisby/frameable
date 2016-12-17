import { Component } from '@angular/core';
import {SITE } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Test';
  globals = SITE
}
