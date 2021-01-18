import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule}from '@angular/router';

import {AdminComponent} from './admin/admin.component'
import {UserComponent} from './user/user.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
const routes:Routes=[{
  path:'user',
  component:UserComponent
},
{
  path:'admin',
  component:AdminComponent
},
{
  path:'**',
  component:PageNotFoundComponent
}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
