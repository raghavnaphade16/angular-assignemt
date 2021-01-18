import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(public el:ElementRef) { 
    el.nativeElement.style.color='green';
  }

}
