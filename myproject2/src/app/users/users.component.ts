import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() cData: any;
  @Output() demo =new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
    this.demo.emit("This is Child");
  }

}
