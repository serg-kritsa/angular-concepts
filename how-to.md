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