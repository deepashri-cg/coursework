import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'yellow';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') addHighLight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') removeHighLight() {
    this.element.nativeElement.style.backgroundColor = null;
  }

}
