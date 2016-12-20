import { Component, OnInit } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, IPage {

NavItems: ContextNavItem[];

  constructor() { }

  ngOnInit() {
  }

}
