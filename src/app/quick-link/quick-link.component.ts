import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[quickLink]',
  templateUrl: './quick-link.component.html',
  styleUrls: ['./quick-link.component.scss']
})
export class QuickLinkComponent implements OnInit {


@Input('title')
Title  : string;
@Input('icon')
Icon  : string;
@Input('text')
Text  : string;

  constructor() { }

  ngOnInit() {
  }

}
