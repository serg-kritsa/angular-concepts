import { Component } from '@angular/core';
import { Post } from './inner/post.interface';

@Component({
  selector: 'app-directives-output',
  template: `
    <outer (myEvent)="myEventHandler($event)"></outer>
    <div *ngFor="let item of posts">
      <em>{{ item.title }}</em>
      <p>{{ item.content }}</p>
    </div>
    <hr>
    <outer-alias (myCustomEvent)="myEventHandler($event)"></outer-alias>
    <div *ngFor="let item of posts">
      <em>{{ item.title }}</em>
      <p>{{ item.content }}</p>
    </div>
  `,
})
export class DirectivesOutputComponent {
  posts = [];
  
  myEventHandler(e: Post){
    this.posts.push(e)
  }
}
