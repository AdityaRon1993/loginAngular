import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayData:any;
  constructor(private data : GetDataService,
    private route : Router) { 
      
    }

  ngOnInit() {
    this.data.getData().subscribe((res)=>this.displayData=res)
    console.log(this.displayData)
    let status=this.data.getLoginValue()
    if(!status){
      this.route.navigate(['/login'])
    }
    console.log(status)
  }
  

}
