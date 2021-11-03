import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ngcontent-inner',
  template: `
    <div>
      <p>!!!</p>
      <ng-content></ng-content>
    </div>
  `
})
export class InnerDirectivesNgcontentComponent {}