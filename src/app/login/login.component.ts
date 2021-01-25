import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../register-user.service';
import {User}  from '../register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username : string;
  password : string;

  message : any;

  constructor(private service : RegisterUserService,private router : Router) {}

  ngOnInit() {
  }
  public doLogin(){
    let response = this.service.loginnow(this.username, this.password);
      response.subscribe((data) => {
        this.message = data; 
        this.router.navigate(["/Search-Medicine"])
      });
}
}
