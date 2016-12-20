import { Component, OnInit, Input } from '@angular/core';
import { ContextNavItem } from '../models/context-nav-item';
import { IPage } from '../models/ipage';

@Component({
  selector: 'app-framing',
  templateUrl: './framing.component.html',
  styleUrls: ['./framing.component.scss']
})
export class FramingComponent implements OnInit, IPage {

  constructor() { }

  @Input()
  NavItems: ContextNavItem[];

  ngOnInit() {
  }

}
