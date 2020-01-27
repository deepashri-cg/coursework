import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') addHighLight() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') removeHighLight() {
    this.element.nativeElement.style.backgroundColor = null;
  }

}
