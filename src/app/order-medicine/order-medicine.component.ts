import { Component, OnInit } from '@angular/core';
import { OrdMedService } from '../order-med.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-medicine',
  templateUrl: './order-medicine.component.html',
  styleUrls: ['./order-medicine.component.scss']
})
export class OrderMedicineComponent implements OnInit {
  
  med: any;
  message : any
  

  constructor(private service: OrdMedService,private router :Router) { }



  ngOnInit() {
    let response = this.service.ordmed();
    response.subscribe((data) =>
      this.med = data);


  }



public goToAddMed(){
  this.router.navigate(['/Add-Med']);
}

public goToeditMed(id :number){
  this.router.navigate(['/edit-Med',id]);
}

public deleteMed(id:number){
  let response = this.service.deletemednow(id);
  response.subscribe(data => {
    this.message = data;
    this.router.navigate(["/Search-Medicine"])
  });
} 

}
