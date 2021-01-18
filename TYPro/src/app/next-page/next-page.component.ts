import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormdataService} from '../formdata.service'

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {
  data:any;
  d:any;
  constructor(private router: Router,private route:ActivatedRoute,private  content:FormdataService) { 
    console.log("In NExtPage");
    
  }

  ngOnInit(): void {
      this.content.getValues().subscribe((x)=>{
      this.data=(JSON.parse(x));
      });
  }
}
