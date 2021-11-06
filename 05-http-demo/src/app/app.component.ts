import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from "./post.model";
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSubscription: Subscription;
  
  constructor(private http: HttpClient, private postService: PostService) {}
  
  ngOnInit() {
    this.errorSubscription = this.postService.errorEmitter.subscribe(errMsg => this.error = errMsg)
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content)
    // will be sent after subscription
    .subscribe(responseData => {
      console.log(responseData.body);
      // console.log(responseData.headers);
      // console.log(responseData.statusText);
    }, 
    error => this.postService.errorEmitter.next(error.message));
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts()
    .subscribe(_ => this.loadedPosts = [])
  }

  private fetchPosts(){
    this.isFetching = true;
    this.postService.fetchPosts()
    .subscribe(posts => {
      this.loadedPosts = posts;
      this.isFetching = false;
    }, 
    error => {
      this.isFetching = false;
      this.postService.errorEmitter.next(error.message)
    }
    );
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
