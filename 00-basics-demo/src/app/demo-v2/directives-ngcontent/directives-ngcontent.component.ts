import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ngcontent',
  template: `
    <app-directives-ngcontent-inner>
      Content inside open/close tags will replace <b>ng-content</b> element in template
    </app-directives-ngcontent-inner>
  `
})
export class DirectivesNgcontentComponent {}