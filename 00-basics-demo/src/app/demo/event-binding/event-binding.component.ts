import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button class="btn btn-primary" (click)="clickHandler()">BUTTON</button>
    <div>{{ clickCounter }}</div>
  `,
})
export class EventBindingComponent {
  clickCounter = 0;
  clickHandler(){
    this.clickCounter++;
  }
}
