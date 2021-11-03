import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngfor',
  template: `
    <p>app-directives-ngfor works!</p>
    <div *ngFor="let item of list">{{ item }}</div>
    <hr>
    <div *ngFor="let item of list; let i = index">{{ i }}: {{ item }}</div>
  `,
})
export class DirectivesNgforComponent {
  list = ['ID-1', 'ID-2'];
}
