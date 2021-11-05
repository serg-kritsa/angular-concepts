import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ngif',
  template: `
    <p>directives-ngif works!</p>
    <button class="btn btn-primary" (click)="clickHandler()">SHOW/HIDE</button>
    <p *ngIf="isAddedToDOM">Simple Paragraph</p>
    <hr>
    <!--*ngIf will be eexcuted as code below-->
    <!--<ng-template [ngIf]="!isAddedToDOM">-->
      <!--<p>Simple Paragraph</p>-->
    <!--</ng-template>-->
    <hr>
  `,
})
export class DirectivesNgifComponent {
  isAddedToDOM = false;
  clickHandler(){
    this.isAddedToDOM = !this.isAddedToDOM;
  }
}
//// OPTIONAL: ngIf behind the scene
// <div *myNgIf="someProp">
// <li></li>
// </div>

// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// @Directive({ selector: '[myNgIf]' })
// export class myNgIfDirective {
//   @Input() set myNgIf(condition: boolean) {
//     if (condition) {
//       this.vcRef.createEmbeddedView(this.templateRef);
//     } else {
//       this.vcRef.clear();
//     }
//   }

//   constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
// }
