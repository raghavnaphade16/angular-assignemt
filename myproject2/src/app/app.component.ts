import { Component } from '@angular/core';
import{Abc }from './abc' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject2';
  show="green";
  con="yes";
  color="grasaseen";
  data=['Sachin','Sehwag','Dhoni','Virat'];
  opDemo="";
  
  dataObj=[
    {
      name:'Raghav',
      age:'24'
    },
    {
      name:'Abhishek',
      age:'26'
    },
    {
      name:'Shubhamkar',
      age:'28'
    }

  ];
  // getVal(val){
  //   console.log(val);
  //
  // }
  proObj:Abc[]=[
    {
      "name":"Raghav"
    }
  ]
  childData='Raghav';
  acceptData(data:any): void {
    this.opDemo=data;
    console.log(data);    
  }
  
}
