## run development server
`npm start`

## generate component via CLI
`ng g c component-name`
`ng g c component-name --spec false`

## Validate template-driven form
[https://angular.io/api/forms/Validators]
[https://angular.io/api?type=directive]


## setup Firebase
[https://console.firebase.google.com]

### Realtime Database
- init config
'Security rules for Realtime Database'
r'Start in test mode' > b'Enable'

- changing Read / Write rules
[https://console.firebase.google.com/project/fir-app-99824/database/fir-app-99824-default-rtdb/rules]
'Realtime Database'
|Rules|
{
  "rules": {
    ".read": "now < 1638738000000",  // 2021-12-6
    ".write": "now < 1638738000000",  // 2021-12-6
  }
}

## Authentication 
- 'Authentication'
|Sign-in method| 
Enable Email/Password

- firebase auth rest api
[https://firebase.google.com/docs/reference/rest/auth?hl=sr]
[https://firebase.google.com/docs/reference/rest/auth?hl=sr#section-create-email-password]
[https://firebase.google.com/docs/reference/rest/auth?hl=sr#section-sign-in-email-password]

- firebase api key
[https://console.firebase.google.com/project/fir-app-99824/settings/general]
rightbar'Project Overview' >
'Project Settings' > |General| > 'Your project' > 'Web API key'       _____________________________API_KEY_______________________________

- css loading spinner
[https://loading.io/css/]


### example 
curl 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]' \
-H 'Content-Type: application/json' \
--data-binary '{"email":"[user@example.com]","password":"[PASSWORD]","returnSecureToken":true}'

## RxJS
[https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject]
Requires an initial value and emits the current value to new subscribers.

[https://www.learnrxjs.io/learn-rxjs/operators/utility/do]
Transparently perform actions or side-effects, such as logging.

[https://www.learnrxjs.io/learn-rxjs/operators/transformation/exhaustmap]
Map to inner observable, ignore other values until that observable completes.

[https://www.learnrxjs.io/learn-rxjs/operators/filtering/take]
Emit provided number of values before completing.

## hosting app steps
- ng build --prod
- npm i -g firebase-tools
- firebase login
- cd proj-folder && firebase init
r'Hosting'
...use as your public directory?='dist/[project_folder]'
...as a single-page app...: y
...index.html already exists. Overwrite? n
- firebase deploy
Hosting URL: [...firebaseapp.com]

## Sync up
injection place for new service is SharedModule.providers: [LoggingService]

## ngRx overview
list subscribed to state from store > 
  dispatched action after button click > 
    changed state by reducer that waits actions > 
      shown new state in the list

## ngRx Effects
npm i -D @ngrx/effects 


import { interval, fromEvent } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';

fromEvent(document, 'click')
.pipe(
  // restart counter on every click
  mergeMap(() => interval(1000))
  // switchMap(() => interval(1000))
)
.subscribe(console.log);