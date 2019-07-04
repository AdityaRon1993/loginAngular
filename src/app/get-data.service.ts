import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService implements OnInit{
  // url='./../assets/data/data.json' 
  url=' http://localhost:3000/employee' 
  // loggedin

  private logInStatus = new BehaviorSubject(false);
  currentLogInStatus= this.logInStatus.asObservable();
  
  constructor(private http : HttpClient) {
    this.updateLogInStatus(false)
    console.log(this.currentLogInStatus)
   }
   ngOnInit(){
   }
 
  updateLogInStatus(value : boolean){
    this.logInStatus.next(value)
  }
  getData(){
    return this.http.get(this.url)
  }
}

  // write(a){
  //   return this.http.post(this.url,a)
  // }
