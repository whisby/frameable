import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[headingBox]'
})
export class HeadingBoxDirective implements OnInit {

private h3 : any;
private div : any;

  constructor(private el: ElementRef) { 
  this.h3 = document.createElement('h3');
  this.h3.innerHTML = 'No Title';
  this.div = document.createElement('div');
  this.div.setAttribute('class','padding');
  this.div.innerHTML = el.nativeElement.innerHTML;
  this.el.nativeElement.innerHTML = '';
  //this.el.nativeElement.appendChild(this.div);
  this.el.nativeElement.setAttribute('class','heading-box' );
  }


  ngOnInit() {
    
  }



@Input() 
set heading(value : string){
this.h3.innerHTML = value;
this.setTitle();
}


private setTitle() : void {
  console.log(this.h3);
  console.log(this.el.nativeElement);
//this.el.nativeElement.removeChild(this.h3)  ;
this.el.nativeElement.insertBefore(this.h3,this.el.nativeElement.childNodes[0] );
}

}
