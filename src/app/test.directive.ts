import { Directive, ElementRef, HostListener, asNativeElements } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private __ul:ElementRef) {
    this.__ul.nativeElement.style.color="red";
   }

   @HostListener('mouseenter')onMouseEnter(){
    this.__ul.nativeElement.style.color="black";
   }

   @HostListener('mouseleave')onMouseLeave(){
    this.__ul.nativeElement.style.color="black";

   }

}
