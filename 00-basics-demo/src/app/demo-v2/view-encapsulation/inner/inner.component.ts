import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inner',
  template: `<p>inner works!</p>`,
  styles: [`
    p {
        color: blue;
    }`], 
    // encapsulation: ViewEncapsulation.Emulated
    encapsulation: ViewEncapsulation.None
    // encapsulation: ViewEncapsulation.ShadowDom
})
export class InnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
