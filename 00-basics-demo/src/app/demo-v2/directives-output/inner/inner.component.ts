import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from './post.interface';

@Component({
  selector: 'outer',
  template: `
    <label>Title</label>
    <input 
      type="text" 
      class="form-control" 
      [(ngModel)]="myTitle">
    <label>Content</label>
    <input 
      type="text" 
      class="form-control" 
      [(ngModel)]="myContent">
      <br>
    <button
      class="btn btn-primary"
      (click)="onClickHandler({title: myTitle, content: myContent})"
    >Add Post</button>
    <button
      class="btn btn-primary"
      (click)="onClickHandler2()"
    >Add Post 2</button>
  `
})
      // 
export class InnerDirectivesOutputComponent {
  myTitle = 'T'
  myContent = 'C'

  // @Output() myEvent = new EventEmitter();
  @Output() myEvent = new EventEmitter<Post>();

  onClickHandler($event){
    this.myEvent.emit($event);
  }

  onClickHandler2(){
    const data = {title: this.myTitle, content: this.myContent};
    this.myEvent.emit(data);
  }
}