import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-local-ref',
  template: `
    <input type="text" class="form-control" #myLocalRef><br>
    <button class="btn btn-primary" (click)="onClickHandler(myLocalRef)"
    >Accept</button><br>
    <p>{{enteredValue}}</p>
    `
})
export class TemplateLocalRefComponent {
  enteredValue = '';
  onClickHandler(elementRef){
    this.enteredValue = elementRef.value;
  }
}