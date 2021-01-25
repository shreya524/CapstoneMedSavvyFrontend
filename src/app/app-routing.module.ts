import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmedsavvyComponent } from './aboutmedsavvy/aboutmedsavvy.component';
import { AddMedComponent } from './add-med/add-med.component';
import { EditMedComponent } from './edit-med/edit-med.component';
import { LoginComponent } from './login/login.component';
import { OrderMedicineComponent } from './order-medicine/order-medicine.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {
    path:"", redirectTo : "Login",pathMatch : "full"
  },

{
  path:"Browse-Medicines", component: OrderMedicineComponent
},

{
  path:"Search-Medicine", component:SearchComponent
},

{
  path:"Register-User", component:RegisterUserComponent
},

{
  path:"MedSavvy-Pharmacy", component:AboutmedsavvyComponent
},

{
  path:"Login", component:LoginComponent
},

{
  path:"Add-Med", component:AddMedComponent
},
{
  path:"edit-Med/:id", component:EditMedComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
