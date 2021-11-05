import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngclass',
  template: `
    <p>directives-ngclass works!</p>
    <p [ngClass]="{ 'any-class-name': applyClass() }">Simple Paragraph</p>
    <p [ngClass]="{ longclassname: applyClass() }">Simple Paragraph</p>
  `,
  styleUrls: ['./directives-ngclass.component.css']
})
export class DirectivesNgclassComponent {
  applyClass(){
    return true;
  }
}
