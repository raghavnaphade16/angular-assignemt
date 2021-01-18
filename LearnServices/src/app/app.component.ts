import { Component } from '@angular/core';
import {UsersService} from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LearnServices';
  data="";
  constructor(private user:UsersService){
    //Ap routing
    // console.warn(this.user.getData());
    // let data=this.user.getData();
    // this.name=data.name

    //API HTTP
    this.user.getData().subscribe((data: any)=> {
      console.log(data);
      this.data=data;
      
    })
  }
}
