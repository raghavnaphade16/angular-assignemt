import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup}from '@angular/forms'
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')

  });
  getData(){
    console.log(this.loginForm.value);
    
  }
}
