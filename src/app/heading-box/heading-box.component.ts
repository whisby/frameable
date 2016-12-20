import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'heading-box',
  templateUrl: './heading-box.component.html',
  styleUrls: ['./heading-box.component.scss']
})
export class HeadingBoxComponent implements OnInit {

  constructor() { }
  @Input()
  Title: string;
  @Input()
  HTML: string;
  ngOnInit() {
  }

}
