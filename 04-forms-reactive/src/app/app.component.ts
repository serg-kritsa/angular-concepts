import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  usernameControl: FormControl
  emailControl: FormControl
  hobbyControls: AbstractControl[]
  forbiddenUsernames = ['user', 'test']

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.usernameControl = this.signupForm.get('userData.username') as FormControl
    this.emailControl = this.signupForm.get('userData.email') as FormControl
    this.hobbyControls = (this.signupForm.get('hobbies') as FormArray).controls
  }

  onSubmitHandler(){
    console.log(this.signupForm);
  }

  onAddHobby() {
    const hobbyFormArray = this.signupForm.get('hobbies') as FormArray
    const control = new FormControl(null, Validators.required);
    hobbyFormArray.push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null; // if successful
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
