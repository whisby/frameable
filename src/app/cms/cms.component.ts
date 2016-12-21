import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit, IPage {

  constructor() {

    let urlbase = '/cms/';
    let urlpagebase = '/cms/page/';

    this.NavItems = [

      {
        Selected: true,
        URL: urlbase + 'pages',
        Text: 'Pages',
        Description: ''
      },
      {
        URL: urlbase + 'design',
        Text: 'Design',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'partials',
        Text: 'Partials',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'components',
        Text: 'Components',
        Description: '',
        Selected: false
      }
    ];

    this.Pages = [
      {
        URL: urlpagebase + 'about-us',
        System: false,
        Name: 'About US',
        Created: new Date()
      },

      {
        URL: urlpagebase + 'checkout',
        System: true,
        Name: 'Checkout',
        Created: new Date()
      },


      {
        URL: urlpagebase + 'photo-tools',
        System: true,
        Name: 'Photo Tools',
        Created: new Date()
      }

    ];





  }

  @Input()
  NavItems: ContextNavItem[];


  Pages: IPageLink[];

  ngOnInit() {
  }

}



export interface IPageLink {

  URL: string,
  System: boolean,
  Name: string,
  Created: Date

}
