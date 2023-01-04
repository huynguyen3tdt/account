import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { VerifyComponent } from './account/verify/verify.component';
import { PostComponent } from './post/post.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { LoginComponent } from './login/login.component';
import {DatePipe} from "@angular/common";
import {NgxCaptchaModule} from "ngx-captcha";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'post',
    component: PostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader((http));
}

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HomeComponent,
    InfoComponent,
    NotFoundComponent,
    VerifyComponent,
    PostComponent,
    CustomPipePipe,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(routes),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

}
