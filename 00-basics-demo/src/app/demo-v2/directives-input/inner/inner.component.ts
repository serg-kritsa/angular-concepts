import { Component, Input } from '@angular/core';
import { Post } from "./post.interface";

@Component({
  selector: 'inner',
  template: `
    <div>
      <em>{{ post.title}}</em>
      <p>{{ post.content}}</p>
    </div>
  `,
})
export class InnerDirectivesInputComponent {
  // @Input() post;
  // @Input() post: {title : string, content: string};
  @Input() post: Post;
}
