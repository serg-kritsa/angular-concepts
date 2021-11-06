import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

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
        postData,
        {observe: 'response'}
      )
  }

  fetchPosts(){
    return this.http
      .get<{ [key: string]: Post }>('https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        // params: new HttpParams().set('print', 'pretty') // will be .../posts.json?print=pretty
        params: new HttpParams().append('a','b').append('c','d')
      })
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
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      )
  }

  deletePosts(){
    return this.http.delete(
      'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      {
        observe: 'events',
        // responseType: 'json'
        // responseType: 'blob'
        // responseType: 'text'
      }
    )
    .pipe(
      tap(event => {
        console.log(event)
        if(event.type === HttpEventType.UploadProgress) console.log(event.loaded);
      })
    )
  }
}