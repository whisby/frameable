import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit , IPage {

  constructor() { }

  @Input()
  NavItems: ContextNavItem[];

  ngOnInit() {
  }

}
