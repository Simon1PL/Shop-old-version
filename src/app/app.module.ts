import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RoweryComponent } from './rowery/rowery.component';
import { ZawieraWNazwiePipe } from './zawiera-wnazwie.pipe';
import { RowerComponent } from './rower/rower.component';

@NgModule({
  declarations: [
    RoweryComponent,
    ZawieraWNazwiePipe,
    RowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RoweryComponent]
})
export class AppModule { }
