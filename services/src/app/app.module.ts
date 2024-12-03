import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccontComponent } from './new-accont/new-accont.component';
import { AccountComponent } from './account/account.component';
import { AccountServices } from './account.service';
import { LoggingService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
    NewAccontComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AccountServices , LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
