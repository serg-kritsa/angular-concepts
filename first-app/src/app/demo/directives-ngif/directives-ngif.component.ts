import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngif',
  template: `
    <p>directives-ngif works!</p>
    <button class="btn btn-primary" (click)="clickHandler()">SHOW/HIDE</button>
    <p *ngIf="isAddedToDOM">Simple Paragraph</p>
  `,
})
export class DirectivesNgifComponent {
  isAddedToDOM = false;
  clickHandler(){
    this.isAddedToDOM = !this.isAddedToDOM;
  }
}
