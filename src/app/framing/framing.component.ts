import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-framing',
  templateUrl: './framing.component.html',
  styleUrls: ['./framing.component.scss']
})
export class FramingComponent implements OnInit, IPage {

  constructor() {

  let urlbase = '/framing/';

    this.NavItems = [

      {
        Selected: false,
        URL: urlbase + 'moulding',
        Text: 'Moulding',
        Description: ''
      },
      {
        URL: urlbase + 'matboard',
        Text: 'Matboard',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'glazing',
        Text: 'Glazing',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'mounting',
        Text: 'Mounting',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'fillets',
        Text: 'Fillets',
        Description: '',
        Selected: false
      },
      {
        URL: urlbase + 'liners',
        Text: 'Liners',
        Description: '',
        Selected: false
      }
    ]


   }

  @Input()
  NavItems: ContextNavItem[];

  ngOnInit() {
  }

}
