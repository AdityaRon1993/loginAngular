import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private data : GetDataService) { }

  ngOnInit() {
  }
  signUpForm = new FormGroup({
    emailId: new FormControl(''),
    name: new FormControl(''),
    team: new FormControl(''),
    age: new FormControl('')
  })
  wirtedata(){
    let testdata = {
      'id': 13,
      'name':'test',
      'team': 'test',
      'age' : '123',
      'email': "test"
    }
    
    this.data.getData().subscribe((res)=> console.log(res))
  }
}
