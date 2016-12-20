import { Component, OnInit, Input } from '@angular/core';


export interface NavItem {
  URL: string,
  Text: string,
  Icon: string
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
        Icon: 'crop_free'
      },
      {
        Text: 'Ordering',
        URL: '/ordering',
        Icon: 'done'
      },
      {
        Text: 'CMS',
        URL: '/cms',
        Icon: 'description'
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
