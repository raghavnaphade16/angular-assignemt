import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators,AbstractControl}from '@angular/forms'
import {validFirstChar,validPhNo, validPNoChar}from '../shared/customvalidator.validator'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup= new FormGroup({});
  submitted=false;

  constructor(private formBuilder: FormBuilder,private router: Router,private route:ActivatedRoute) {
    this.signUpForm=formBuilder.group({
      firstName:new FormControl('',[Validators.required, validFirstChar]),
      lastName:new FormControl('',[Validators.required, validFirstChar]),
      email:new FormControl('',[Validators.required,Validators.email ]),
      phNo:new FormControl('',[Validators.required,validPNoChar,validPhNo]),
      city:new FormControl('',[Validators.required]),
      // password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      // confirmPassword:new FormControl('',[Validators.required]),
      },{
        // validator: ConfirmedValidator('password', 'confirmPassword') 
        }     
      );
   }

  ngOnInit(): void {
  }
  get f() {
    return this.signUpForm.controls;
  }
  
  saveCall() {
    this.submitted = true;
  
    // Returns false if form is invalid
    if (this.signUpForm.invalid) {
    //  alert("Plz fill form")
      return;
    }
    this.router.navigate(['nextpage'],{
      queryParams:{data:JSON.stringify(this.signUpForm.value)}
    });

    
    console.log("Form Values" + JSON.stringify(this.signUpForm.value));
  }
}
