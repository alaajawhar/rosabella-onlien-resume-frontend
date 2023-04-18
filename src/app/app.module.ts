import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {Backend} from "../services/backend";
import {CryptoUtil} from "../services/encryption";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Backend,
    CryptoUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
