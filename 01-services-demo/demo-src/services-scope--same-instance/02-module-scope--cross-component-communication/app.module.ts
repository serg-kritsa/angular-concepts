import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './components/app.component';
import { AccountComponent } from './components/account/account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
