import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem }  from  '../models/context-nav-item';

@Component({  
  selector: 'app-context-nav',
  templateUrl: './context-nav.component.html',
  styleUrls: ['./context-nav.component.scss']
})
export class ContextNavComponent implements OnInit {

  constructor() { }

  @Input()
  NavItems : ContextNavItem[];


  ngOnInit() {
  }

}
