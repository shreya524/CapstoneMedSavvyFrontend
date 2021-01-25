import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { OrderMedicineComponent } from './order-medicine/order-medicine.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AboutmedsavvyComponent } from './aboutmedsavvy/aboutmedsavvy.component';
import { OrdMedService } from './order-med.service';
import { RegisterUserService } from './register-user.service';
import { SrcMedService } from './search-med.service';
import { AddMedComponent } from './add-med/add-med.component';
import { User } from './register';
import { Med } from './medicine';
import { EditMedComponent } from './edit-med/edit-med.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    OrderMedicineComponent,
    RegisterUserComponent,
    LoginComponent,
    AboutmedsavvyComponent,
    AddMedComponent,
    EditMedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OrdMedService,RegisterUserService,SrcMedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
