import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegistrtionComponent } from './add-registrtion/add-registrtion.component';
import { WelcomeComponent } from './welcome/welcome-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallRegistrationComponent } from './getall-registration/getall-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CreditcardComponent } from './creditcard/creditcard.component';


@NgModule({
  declarations: [
    AppComponent,
    AddRegistrtionComponent,
    WelcomeComponent,
    GetallRegistrationComponent,
    AdminComponent,
    CreditcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
