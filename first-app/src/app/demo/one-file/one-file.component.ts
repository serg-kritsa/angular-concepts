import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-file',
  template: '<p>one-file works</p>',
  styles: ['p { color: red }']
})
export class OneFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
