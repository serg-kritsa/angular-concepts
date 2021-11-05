import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  template: `
    <h1>{{ property2 }}</h1>
    <p>{{ property1 }}</p>
    <p>{{ 'any string allowed' }}</p>
    <p>{{ anyMethod() }}</p>
  `,
})
export class StringInterpolationComponent {
  property1 = '__interpolated property';
  property2 = 2;
  returnedProp = '__returnedProp'
  anyMethod(){
    return this.returnedProp;
  }
}
