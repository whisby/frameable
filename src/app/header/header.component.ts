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
        URL: '#',
        Icon: 'dashboard'
      },
      {
        Text: 'Product',
        URL: '#',
        Icon: 'list'
      },
      {
        Text: 'Framing',
        URL: '#',
        Icon: 'settings_brightness'
      },
      {
        Text: 'Ordering',
        URL: '#',
        Icon: 'done'
      },
      {
        Text: 'CMS',
        URL: '#',
        Icon: 'description'
      },
      {
        Text: 'Settings',
        URL: '#',
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
