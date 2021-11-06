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

