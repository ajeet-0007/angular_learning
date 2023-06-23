import { DOCUMENT } from '@angular/common';
import {
  Directive,
  OnInit,
  ElementRef,
  Inject,
  Renderer2,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  // color: string = 'red';

  @Input() appHover: string ='red';


  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(element.nativeElement);
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appHover;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.appHover
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
