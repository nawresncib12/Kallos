import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[hover-class]'
})
export class HoverClassDirective {

  constructor(public elementRef: ElementRef) {
  }

  @Input('hover-class') hoverClass: any;

  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverClass)
      this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.hoverClass)
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
