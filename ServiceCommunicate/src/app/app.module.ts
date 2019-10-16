import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComSenderComponent } from './com-sender/com-sender.component';
import { ComReciverComponent } from './com-reciver/com-reciver.component';
import { ComunicateService } from './comunicate.service';


@NgModule({
  declarations: [
    AppComponent,
    ComSenderComponent,
    ComReciverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ComunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
