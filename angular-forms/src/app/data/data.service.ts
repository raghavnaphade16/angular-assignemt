import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from '../data/user-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }
  postUserDataForm(userData:UserData):Observable<any>{
   
    return this.http.post('https://putsreq.com/Yfr5sdkESA40Lxno0uLp',userData);

    // return of(userData);
  }
  getST(): Observable<string[]> {
    return of(['Monthly','Annualy','Life Time'])
  }  
}
