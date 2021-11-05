import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-input',
  template: `
    <inner 
      *ngFor="let item of posts"
      [post]="item"
    ></inner>
    <hr>
    <inner-accepts-alias-prop
      [myAcceptedCustomPost]="myCustomPost"
    ></inner-accepts-alias-prop>

  `,
})
export class DirectivesInputComponent {
  posts = [{title: 'Title1', content: 'Content1'}, {title: 'Title 2', content: 'Normal Content 2'}]; 
  myCustomPost = {title: 'My Custom Title 1', content: 'My Custom Content 1'}; 
}
