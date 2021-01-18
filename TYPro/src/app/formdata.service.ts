import { Injectable } from '@angular/core';
import {Observable, Subject,BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FormdataService {
  private data:BehaviorSubject<any>=new BehaviorSubject<any>(null);
  public share=this.data.asObservable();
  constructor() { }
  public updatedata(text: any){
    this.data.next(text);
  }
  public getValues():Observable<any>{
    return this.data
  }

}
