import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './demo/template/template.component';
import { StylesComponent } from './demo/styles/styles.component';
import { OneFileComponent } from './demo/one-file/one-file.component';
import { SelectorAttributeComponent } from './demo/selector-attribute/selector-attribute.component';
import { SelectorClassComponent } from './demo/selector-class/selector-class.component';
import { StringInterpolationComponent } from './demo/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './demo/property-binding/property-binding.component';
import { EventBindingComponent } from './demo/event-binding/event-binding.component';
import { EventBindingV2Component } from './demo/event-binding-v2/event-binding-v2.component';
import { DirectivesNgifComponent } from './demo/directives-ngif/directives-ngif.component';
import { DirectivesNgifElseComponent } from './demo/directives-ngif-else/directives-ngif-else.component';
import { DirectivesNgstyleComponent } from './demo/directives-ngstyle/directives-ngstyle.component';
import { DirectivesNgclassComponent } from './demo/directives-ngclass/directives-ngclass.component';
import { DirectivesNgforComponent } from './demo/directives-ngfor/directives-ngfor.component';
import { DirectivesInputComponent }     from './demo-v2/directives-input/directives-input.component';
import { InnerDirectivesInputComponent } from './demo-v2/directives-input/inner/inner.component';
import { InnerAcceptsAliasPropComponent } from './demo-v2/directives-input/inner/inner-accepts-alias-prop.component';
import { DirectivesOutputComponent }     from './demo-v2/directives-output/directives-output.component';
import { InnerDirectivesOutputComponent } from './demo-v2/directives-output/inner/inner.component';
import { InnerEmittedAliasEventComponent } from './demo-v2/directives-output/inner/inner-emitted-alias-event.component';
import { ViewEncapsulationComponent } from './demo-v2/view-encapsulation/view-encapsulation.component';
import { InnerComponent } from './demo-v2/view-encapsulation/inner/inner.component';
import { TemplateLocalRefComponent } from './demo-v2/template-local-ref/template-local-ref.component';
import { DirectivesNgcontentComponent } from './demo-v2/directives-ngcontent/directives-ngcontent.component';
import { InnerDirectivesNgcontentComponent } from './demo-v2/directives-ngcontent/inner/inner.component';
import { DirectivesNgswitchComponent } from './demo-v2/directives-ngswitch/directives-ngswitch.component';

import { Basic14Directive } from "./demo-v2/directives-attribute/basic-14-hidden.directive";
import { Basic13Directive } from "./demo-v2/directives-attribute/basic-13.directive";
import { Basic11Directive, Basic12Directive } from "./demo-v2/directives-attribute/basic-11.directive";
import { Basic01Directive, Basic02Directive } from "./demo-v2/directives-attribute/basic-01.directive";
import { AttributeDirectiveDemoComponent } from "./demo-v2/directives-attribute/demo-attribute-directive.component";

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    StylesComponent,
    OneFileComponent,
    SelectorAttributeComponent,
    SelectorClassComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    EventBindingV2Component,
    DirectivesNgifComponent,
    DirectivesNgifElseComponent,
    DirectivesNgstyleComponent,
    DirectivesNgclassComponent,
    DirectivesNgforComponent,
    DirectivesInputComponent, InnerDirectivesInputComponent, InnerAcceptsAliasPropComponent, 
    DirectivesOutputComponent, InnerDirectivesOutputComponent, InnerEmittedAliasEventComponent, 
    ViewEncapsulationComponent, InnerComponent, 
    TemplateLocalRefComponent, 
    DirectivesNgcontentComponent, InnerDirectivesNgcontentComponent, 
    DirectivesNgswitchComponent,
    Basic01Directive, Basic02Directive, Basic11Directive, Basic12Directive, Basic13Directive, Basic14Directive,
    AttributeDirectiveDemoComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
