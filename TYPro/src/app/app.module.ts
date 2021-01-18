import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NextPageComponent } from './next-page/next-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes:Routes=[
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'nextpage',
    component:NextPageComponent
  },
  {
    path:'',
    redirectTo:'header',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NextPageComponent,
    SignUpComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
