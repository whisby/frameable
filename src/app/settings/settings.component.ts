import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, IPage {

  constructor() {

    let urlbase = '/settings/';

    this.NavItems = [

      {
        Selected: false,
        URL: urlbase + 'promo',
        Text: 'Sales and Promos',
        Description: ''
      },
      {
        Selected: false,
        URL: urlbase + 'email',
        Text: 'Email Settings',
        Description: ''
      },
      {
        Selected: false,
        URL: urlbase + 'policies',
        Text: 'Policies',
        Description: ''
      },
      {
        Selected: false,
        URL: urlbase + 'company',
        Text: 'Company',
        Description: ''
      }
    ];



  }

  @Input()
  NavItems: ContextNavItem[];

  ngOnInit() {
  }

}
