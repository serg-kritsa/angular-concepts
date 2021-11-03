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

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    TemplateComponent,
    StylesComponent,
    OneFileComponent,
    SelectorAttributeComponent,
    SelectorClassComponent,
    StringInterpolationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
