import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <p>property-binding works!</p>
    <button class="btn btn-primary" [disabled]="property">BUTTON</button>
    <button class="btn btn-primary" [disabled]="!property">BUTTON</button>
  `,
})
export class PropertyBindingComponent {
  property = false;

  constructor() {
    setTimeout(() => {
      this.property = true;
    }, 1000);
  }
}
