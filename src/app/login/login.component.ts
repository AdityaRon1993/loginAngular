import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { GetDataService } from '../get-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data
  err
  flag=false
  constructor(private service: GetDataService,
    private route: Router) { }

  ngOnInit() {
    this.service.getData().subscribe((res) => { this.data = res; console.log(this.data) })
  }
  // loggedIn=false

  
  loginForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl('')
  })
  get emailId() { return this.loginForm.get('emailId'); }
  get password() { return this.loginForm.get('password'); }
  doLogin(a) {
    
    this.flag=(this.data.some((ele) => ele.email == a.emailId && ele.team == a.password))
    if (this.flag) {
      this.service.updateLoginValue(true);
      this.route.navigate(['/home']);
    }
    else{
      console.log('wrong')
      this.err='Wrong Email or Password'
    }

  }
}
