import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class StylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
