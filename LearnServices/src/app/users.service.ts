import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {  }
  //For Routing
  // getData(): { name: string; age: number; }{
  //   return{
  //     name:'raghav',
  //     age:35
  //   };
  // }
  //For Call API HTTP
  getData(){
    return this.http.get("http://jsonplaceholder.typicode.com/todos/");
  }
}
