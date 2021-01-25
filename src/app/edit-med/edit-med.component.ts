import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Med } from '../medicine';
import { OrdMedService } from '../order-med.service';

@Component({
  selector: 'app-edit-med',
  templateUrl: './edit-med.component.html',
  styleUrls: ['./edit-med.component.scss']
})
export class EditMedComponent implements OnInit {

  newmed : Med = new Med(0,"","","","",0,0);
  message : any;
  med:any;
   

  constructor(private service: OrdMedService,private router :Router ,private activateroute : ActivatedRoute) { }

  ngOnInit(){
   let id = parseInt(this.activateroute.snapshot.paramMap.get('id'));
   let response = this.service.medByID(id);
    response.subscribe((data) =>
      this.med = data);
  }

  public editMed(){
    let response = this.service.editmednow(this.newmed);
    response.subscribe(data => {
      this.message = data;
      this.router.navigate(["/Login"])
    });
    }

   
}
