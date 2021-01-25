import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Med } from '../medicine';
import { OrdMedService } from '../order-med.service';

@Component({
  selector: 'app-add-med',
  templateUrl: './add-med.component.html',
  styleUrls: ['./add-med.component.scss']
})
export class AddMedComponent implements OnInit {

  newmed : Med = new Med(0,"","","","",0,0);
  message : any;
  constructor(private service: OrdMedService,private router :Router) { }

  ngOnInit(){
  }


  public addmed() {
    
    let response = this.service.addmednow(this.newmed);
    console.log(this.newmed)
    response.subscribe(data => {
      this.message = data
      this.router.navigate(["/Search-Medicine"])});
      
  
}
}
