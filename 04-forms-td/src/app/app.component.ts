import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmitHandler(form: NgForm){
    // form.value === entered values in controls by user
    // form.dirty === entered value in control by user
    // form.touched === clicked in control by user
    console.log(form);
  }
}
