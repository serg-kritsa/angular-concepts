import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm
  defaultSecretQuestionType = 'pet'
  questionAnswer = ''
  genders = ['male', 'female']
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '' // previous value will be overwritten //// downside
    //   }
    // })
    this.signupForm.form.patchValue({userData: {username: suggestedName}})
  }

  onSubmitHandler(form: NgForm){
    // form.value === entered values in controls by user
    // form.dirty === entered value in control by user
    // form.touched === clicked in control by user
    console.log(form);

    console.log(form.value.userData);          // {username, email}
    console.log(form.controls.userData.value); // {username, email}
  }

  onViewChildSubmitHandler(){
    // form.value === entered values in controls by user
    // form.dirty === entered value in control by user
    // form.touched === clicked in control by user
    
    console.log(this.signupForm.value);
  }
}
