import { Component, Input } from '@angular/core';
import { Post } from "./post.interface";

@Component({
  selector: 'inner-accepts-alias-prop',
  template: `
  <div>
  <em>{{ post.title}}</em>
  <p>{{ post.content}}</p>
  </div>
  `,
})
export class InnerAcceptsAliasPropComponent {
  // @Input('myAcceptedCustomPost') post;
  // @Input('myAcceptedCustomPost') post: {title : string, content: string};
  @Input('myAcceptedCustomPost') post: Post;
}