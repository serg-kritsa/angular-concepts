import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ngswitch',
  template: `
    <div [ngSwitch]="value">
    <p *ngSwitchCase="5">Value is 5</p>
    <p *ngSwitchCase="10">Value is 10</p>
    <p *ngSwitchCase="100">Value is 100</p>
    <p *ngSwitchDefault>Value is Default</p>
    </div>
  `
})

export class DirectivesNgswitchComponent {
  value = 5;
}
