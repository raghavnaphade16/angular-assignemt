import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormdataService}from '../formdata.service'
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  validFirstChar,
  validPhNo,
  validPNoChar,
} from '../shared/customvalidator.validator';
declare var jQuery:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 
  signUpForm: FormGroup = new FormGroup({});
  submitted = false;
  hideModal: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private content:FormdataService
  ) {
    this.signUpForm = formBuilder.group(
      {
        firstName: new FormControl('', [Validators.required, validFirstChar]),
        lastName: new FormControl('', [Validators.required, validFirstChar]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phNo: new FormControl('', [
          Validators.required,
          validPNoChar,
          validPhNo,
        ]),
        city: new FormControl('', [Validators.required]),

      },
    );
  }

  ngOnInit(): void {}
  get f() {
    return this.signUpForm.controls;
  }

  saveCall() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    } else {
      jQuery("#signup").modal("hide");
      this.content.updatedata(JSON.stringify(this.signUpForm.value))
      this.router.navigate(['nextpage']);
       
    }
  }
}

