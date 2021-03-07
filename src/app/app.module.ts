import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DbService } from './db.service';
import { DlButtonComponent } from './dl-button/dl-button.component';



@NgModule({
  declarations: [
    AppComponent,
    DlButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
