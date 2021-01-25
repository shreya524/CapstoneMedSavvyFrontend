import { Component, OnInit } from '@angular/core';
import { SrcMedService } from '../search-med.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   
  medname :String;
   med : any;
  constructor(private service : SrcMedService) { }

  ngOnInit(): void {
  }
  
  public srcnow(){
  let response = this.service.srcmed(this.medname);
    response.subscribe((data) => this.med = data);
     
}
}
