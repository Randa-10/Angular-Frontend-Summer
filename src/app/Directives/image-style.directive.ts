import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImageStyle]',
  standalone: true
})
export class ImageStyleDirective implements OnChanges{
@Input('appImageStyle')  colorBorder:string="yellow"  

  constructor(public element:ElementRef    ) {
// this.element.nativeElement.style.border="2px  solid black "
this.element.nativeElement.style.border=`2px  solid ${this.colorBorder}`

  }
  ngOnChanges(): void {
    // this.element.nativeElement.style.border="2px  solid black "

  }


@HostListener('mouseover')  mouseOver(){
  // this.element.nativeElement.style.border="4px  solid yellow "
  this.element.nativeElement.style.border=`4px  solid ${this.colorBorder}  `


}
@HostListener('mouseout')    mouseOut(){
  this.element.nativeElement.style.border="2px  solid red "

}
}
