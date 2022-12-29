import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      // loader: {
      //   provide: TranslateLoader,
      //   // useFactory: HttpLoaderFactory,
      //   deps: [HttpClient]
      // }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // export function HttpLoaderFactory(http: HttpClient) {
  //   return new TranslateHttpLoader((http));
  // }
}
