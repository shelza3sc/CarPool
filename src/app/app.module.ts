import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FindRideComponent } from './pages/find-ride/find-ride.component';
import { HeaderAllComponent } from './header-all/header-all.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import { RidingDetailsComponent } from './pages/riding-details/riding-details.component';
import { RidingInfoComponent } from './pages/riding-info/riding-info.component';
import { PassengerInfoComponent } from './Pages/passenger-info/passenger-info.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms'

import { OfferHeaderComponent } from './offer-header/offer-header.component';
import { OfferRideDetailsComponent } from './pages/offer-ride-details/offer-ride-details.component';


import { AuthService} from './services/auth.service'
import {HttpClientModule} from '@angular/common/http';
import { VehicleInfoComponent } from './pages/vehicle-info/vehicle-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FindRideComponent,
    HeaderAllComponent,
    RidingDetailsComponent,
    RidingInfoComponent,
    PassengerInfoComponent,
  
    
    OfferHeaderComponent,
    OfferRideDetailsComponent,
    VehicleInfoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatePickerModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService],
  
  bootstrap: [AppComponent]
})
export class AppModule {
  public minDate: Date = new Date ("05/07/2017");
  public maxDate: Date = new Date ("05/27/2017");
  public dateValue: Date = new Date ("05/16/2017");
 }
