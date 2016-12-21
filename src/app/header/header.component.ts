import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


export interface NavItem {
  URL: string,
  Text: string,
  Icon: string
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {


  constructor() {

    this.Items = [
      {
        Text: 'Dash',
        URL: '/dashboard',
        Icon: 'dashboard'
      },
      {
        Text: 'Product',
        URL: '/product',
        Icon: 'dns'
      },
      {
        Text: 'Framing',
        URL: '/framing',
        Icon: 'check_box_outline_blank'
      },
      {
        Text: 'Ordering',
        URL: '/ordering',
        Icon: 'assignment_turned_in'
      },
      {
        Text: 'CMS',
        URL: '/cms',
        Icon: 'description'
      },
      {
        Text: 'Assets',
        URL: '/asset',
        Icon: 'perm_media'
      },
      {
        Text: 'Settings',
        URL: '/settings',
        Icon: 'settings'
      },


    ];

  }

  @Input()
  Title: string;

  Items: NavItem[];

  ngOnInit() {
  }
}
