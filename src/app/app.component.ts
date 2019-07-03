import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IncredProject';
  show
  constructor(private data: GetDataService) {

  }
  ngOnInit() {

  }
  changeUI() {
    this.show = this.data.getLoginValue()
    console.log(this.show)
  }
  logOut() {
    this.data.updateLoginValue(false)
  }

}
