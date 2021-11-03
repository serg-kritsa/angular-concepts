import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  // template: '<p>template works!</p>',
  template: `
    <h1>temh1late works!</h1>
    <p>template works!</p>`,
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
