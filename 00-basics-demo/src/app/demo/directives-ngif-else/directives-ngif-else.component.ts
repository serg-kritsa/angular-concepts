import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngif-else',
  template: `
    <p>directives-ngif-else works!</p>
    <button class="btn btn-primary" (click)="clickHandler()">SHOW/HIDE PASSWORD</button>
    <p *ngIf="isAddedToDOM; else anyTemplateRef">Password is 123456</p>
    <ng-template #anyTemplateRef>
      <p>Password is hidden</p>
    <ng-template>
  `,
})
export class DirectivesNgifElseComponent {
  isAddedToDOM = false;
  clickHandler(){
    this.isAddedToDOM = !this.isAddedToDOM;
  }
}