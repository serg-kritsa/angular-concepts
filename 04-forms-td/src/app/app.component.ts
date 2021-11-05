import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSecretQuestionType = 'pet'
  questionAnswer = ''
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmitHandler(form: NgForm){
    // form.value === entered values in controls by user
    // form.dirty === entered value in control by user
    // form.touched === clicked in control by user
    console.log(form);

    console.log(form.value.userData);          // {username, email}
    console.log(form.controls.userData.value); // {username, email}
    
  }
}
