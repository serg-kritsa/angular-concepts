import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {

  constructor(private http: HttpClient){}

  createAndStorePost(title: string, content: string){
    const postData: Post = {title, content}
    this.http
      .post<{name: string}>(
        // provided link
        //                                                                    collection json file
        'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      // will be sent after subscription
      .subscribe(responseData => {
        console.log(responseData);
      });}

  fetchPosts(){}
}