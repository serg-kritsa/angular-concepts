import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[basic01]'
})
export class Basic01Directive implements OnInit {
  // not recommended if executed not only in browser
  // not recommended if executed not only in browser
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}

@Directive({
  selector: '[basic02]'
})
export class Basic02Directive implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  }
}  