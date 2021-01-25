import { Component, OnInit } from '@angular/core';
import {RegisterUserService}  from '../register-user.service';
import {User}  from '../register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  
  user : User = new User(0,"","","","","");
  message :any;
  constructor(private service : RegisterUserService,private router : Router) {}
    
  
  ngOnInit() {
  }
  
  public registerNow(){
  let response = this.service.doRegisteration(this.user);
  response.subscribe(data => {
    this.message = data;
    this.router.navigate(["/Login"])
  });
  }
}


