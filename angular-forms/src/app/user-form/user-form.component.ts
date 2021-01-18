import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import{UserData} from '../data/user-data';
@Component({

  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  
  constructor(private dataService:DataService) { }

  
  
  subscriptionTypes=new Observable<string[]>();
  myData:UserData={
    name:null,
    emailOffers:null,
    interfaceStyle:null,
    subscriptiontype:null,
    notes:null
  };
  data:UserData={...this.myData};
  postError=false;
  postErrorMessage="";
  onHttpError(errorResponse:any){
    console.log('error',errorResponse);
    this.postError=true;
    this.postErrorMessage=errorResponse.error.errorMessage;

  }
  onSubmit(form: NgForm): void{
    console.log('in on submit',form.valid);
    if(form.valid){
      this.dataService.postUserDataForm(this.data).subscribe(
        result => console.log('success',result),
        error =>this.onHttpError(error)
      );
    }
    else{
      this.postError=true;
    }
    
    
  }
  ngOnInit(): void {
    this.subscriptionTypes=this.dataService.getST();
  }

}
