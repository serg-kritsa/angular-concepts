import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngstyle',
  template: `
    <p>app-directives-ngstyle works!</p>
    <p [ngStyle]="{ backgroundColor: getColor() }">Simple Paragraph</p>
  `,
})
export class DirectivesNgstyleComponent {
  getColor(){
    return 'yellow';
  };
}