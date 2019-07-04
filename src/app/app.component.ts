import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';
import { Router, Route } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IncredProject';
  show
  constructor(private data: GetDataService, private route : Router) {

  }
  ngOnInit() {
    this.data.currentLogInStatus.subscribe((a)=> this.show=a)

  }
  
  logOut() {
    this.data.updateLogInStatus(false);
    this.route.navigate(['/login'])
  }

}
