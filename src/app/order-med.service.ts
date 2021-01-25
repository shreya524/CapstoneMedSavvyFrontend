import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Med } from './medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdMedService {

  constructor( private http : HttpClient) { }

  public ordmed():Observable <any>{
    return this.http.get<any>("http://localhost:8080/admin-med/all-med");
  }

  public addmednow(newmed:Med) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/admin-med/add-new-med",newmed, {responseType : "text" as "json"});
  }

  
  public medByID(id):Observable <any>{
    return this.http.get<any>("http://localhost:8080/admin-med/get-med/" + id);
  }


  public editmednow(newmed:Med) : Observable<any>{
    return this.http.post<any>("http://localhost:8080/admin-med/edit-med",newmed, {responseType : "text" as "json"});
  }

  public deletemednow(id) : Observable<any>{
    return this.http.delete<any>("http://localhost:8080/admin-med/delete/" + id);
  }

}
