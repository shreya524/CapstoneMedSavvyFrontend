import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './register';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor( private http : HttpClient) { }

  public doRegisteration(user: User){
    return this.http.post("http://localhost:8080/user/register-user",user, {responseType : "text" as "json"});
  }

  public loginnow(username : string, password:string) {

    const headers = new HttpHeaders({Authorization: 'Basic'+ btoa(username+":"+password)})
    return this.http.get("http://localhost:8080/user/login-user",{headers,responseType:'text' as 'json'});
  }
}

