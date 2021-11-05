import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';

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

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
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
}
