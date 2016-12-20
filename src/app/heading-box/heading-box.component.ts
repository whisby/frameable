import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { INavigatable } from '../models/inavigatable';

@Component({
  selector: '[headingBox]',
  templateUrl: './heading-box.component.html',
  styleUrls: ['./heading-box.component.scss'],
  host: {
    class: 'heading-box'
  }
})
export class HeadingBoxComponent implements OnInit {

  constructor() {
  }

  @Input('heading')
  Heading: string;


  ngOnInit() {
  }

}
