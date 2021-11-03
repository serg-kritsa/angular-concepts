import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
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
    DirectivesNgforComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
