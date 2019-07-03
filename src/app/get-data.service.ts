import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  // url='./../assets/data/data.json' 
  url=' http://localhost:3000/employee' 
  loggedin=false
  constructor(private http : HttpClient) { }
  getData(){
    return this.http.get(this.url)
  }
  write(a){
    return this.http.post(this.url,a)
  }
  updateLoginValue(a){
    this.loggedin=a;
  }
  getLoginValue(){
    return this.loggedin
  }
}
