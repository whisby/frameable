import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SITE } from './app.config';
import { ContextNavItem } from './models/context-nav-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Test Test';
  NavItems: ContextNavItem[];
  Globals = SITE

  constructor(private router : Router) {

var body = document.getElementsByTagName('body')[0];



 router.events.subscribe((url:any) => {   
   let  urlParts = url.url.split('/');
   let  i = urlParts.length == 2 ? 1 : 0;   
   body.setAttribute('class', urlParts[i] );
  } );

      

  }


  ngOnInit() {
  }


}
