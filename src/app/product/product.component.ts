import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, IPage {

  constructor() {
    let urlbase = '/product/';
    this.NavItems = [
      {
        Selected: false,
        URL: urlbase + 'create',
        Text: 'Products',
        Description: ''
      },
      {
        Selected: false,
        URL: urlbase + 'categories',
        Text: 'Categories',
        Description: ''
      },
      {
        Selected: false,
        URL: urlbase + 'artist',
        Text: 'Artists',
        Description: ''
      },{
        Selected: false,
        URL: urlbase + 'publisher',
        Text: 'Publishers',
        Description: ''
      },
      {
        Selected: false,
        URL: urlbase + 'printing',
        Text: 'Printing',
        Description: ''
      }
    ];
  }

  @Input()
  NavItems: ContextNavItem[];

  ngOnInit() {
  }

}
