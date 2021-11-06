import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { Post } from "./post.model";

@Injectable({providedIn: 'root'})
export class PostService {
  errorEmitter = new Subject<string>();

  constructor(private http: HttpClient){}

  createAndStorePost(title: string, content: string){
    const postData: Post = {title, content}
    return this.http
      .post<{name: string}>(
        // provided link
        //                                                                    collection json file
        'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
  }

  fetchPosts(){
    return this.http
      .get<{ [key: string]: Post }>('https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      // was {"key": { ...document data  }}
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          // became { ...document_data, id: "key"}
          return postsArray;
        })
      )
  }

  deletePosts(){
    return this.http.delete('https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
  }
}