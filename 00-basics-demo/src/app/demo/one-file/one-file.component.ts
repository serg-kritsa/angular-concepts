import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-file',
  template: `
    <div app-selector-attribute></div>
    <div class="app-selector-class"></div>
    <p>Paragraph for inline style will be red/p>
    <app-string-interpolation></app-string-interpolation>
    <app-property-binding></app-property-binding>
  `,
  styles: ['p { color: red }']
})
export class OneFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
