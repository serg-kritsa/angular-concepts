import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        // provided link
        //                                                                    collection json file
        'https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      // will be sent after subscription
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get('https://fir-app-99824-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      // was {"key": { ...document data  }}
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )// became { ...document_data, id: "key"}
      .subscribe(posts => {
        // ...
        console.log(posts);
      });
  }
}
