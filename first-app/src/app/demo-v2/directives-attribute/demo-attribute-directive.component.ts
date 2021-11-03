import { Component } from '@angular/core';

@Component({
  selector: 'attribute-directive-demo',
  template: `
    <p basic01>Style me with basic01 directive!</p>
    <p basic02>Style me with basic02 directive!</p>
    <p basic11>Style me with basic11 directive!</p>
    <p basic12>Style me with basic12 directive!</p>
    <hr>
    <p basic13 [defaultColor]="'yellow'" [highlightColor]="'red'">Style me with basic13 directive!</p>
    <p         [defaultColor]="'yellow'" [highlightColorAlias]="'red'">Style me with basic14 directive!</p>
  `
})
export class AttributeDirectiveDemoComponent {}
