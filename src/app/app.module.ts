import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RoweryComponent } from './rowery/rowery.component';

@NgModule({
  declarations: [
    RoweryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RoweryComponent]
})
export class AppModule { }
