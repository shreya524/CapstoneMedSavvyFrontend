import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Med } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class SrcMedService {

  constructor( private http : HttpClient) { }

  public srcmed(medname){

    return this.http.get("http://localhost:8080/admin-med/srch-med/"+medname)
   
  }
}
