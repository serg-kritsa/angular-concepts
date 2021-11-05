import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-v2',
  template: `
    <h1>event-binding-v2 works!</h1>
    <h3>One-way binding in input</h3>
    <input 
      type="text" 
      class="form-control" 
      (input)="updateInputValue($event)">
    <p>{{ inputValue }}</p>
    <hr>
    <h3>Two-way binding in input</h3>
    <input 
      type="text" 
      class="form-control" 
      [(ngModel)]="inputValue">
    <p>{{ inputValue }}</p>
  `,
})
export class EventBindingV2Component {
  inputValue = 'FormModule in app.module.ts is required';
  updateInputValue(e: Event){
    this.inputValue = (e.target as HTMLInputElement).value;
  }
}
