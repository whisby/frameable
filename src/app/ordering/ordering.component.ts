import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.scss']
})
export class OrderingComponent implements OnInit, IPage {

  @Input()
  NavItems: ContextNavItem[];



  constructor() {

    let urlbase = '/ordering/';

    this.NavItems = [

      {
        Selected: false,
        URL: urlbase + 'list',
        Text: 'Orders',
        Description: ''
      },
      {
        URL: urlbase + 'incomplete-orders',
        Text: 'Incomplete Orders',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'customers',
        Text: 'Customer Manager',
        Description: '',
        Selected: false
      }
    ]
  }

  ngOnInit() {
  }

}
