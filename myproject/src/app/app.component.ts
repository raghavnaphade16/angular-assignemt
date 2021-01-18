import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname = 'Wai Tech';
  myName='Raghav';
  name="Raghav";
  getName(name:any){
    alert("Hello "+name);
  }  
  myEvent(evt:any){
    console.log(evt);
  }
  getVal(val:any){
    console.log(val);
    alert(val);
  }
  disabledBox=true
  enableTxtBox(){
    this.disabledBox=false
  }
  
}
