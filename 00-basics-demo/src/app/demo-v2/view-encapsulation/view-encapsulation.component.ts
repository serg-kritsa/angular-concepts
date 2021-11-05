import { Component } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  template: `
    <h3>view-encapsulation works!</h3>
    <app-inner></app-inner>
  `,
})
export class ViewEncapsulationComponent {}
