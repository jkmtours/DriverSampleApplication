import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import {DriverService} from "./driver.service";
import {AppHttpClient} from "./common/apphttpclient.service";


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule, HttpModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [DriverService, AppHttpClient]
})
export class AppModule { }
