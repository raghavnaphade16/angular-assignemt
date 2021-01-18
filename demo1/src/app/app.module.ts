import {FormsModule} from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
const appRouter:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'nextpage',
    component:NextpageComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NextpageComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    NgxQRCodeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
