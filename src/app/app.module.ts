import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegistrtionComponent } from './add-registrtion/add-registrtion.component';
import { WelcomeComponent } from './welcome/welcome-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallRegistrationComponent } from './getall-registration/getall-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAddressComponent } from './add-address/add-address.component';


import { DeleteAddressByIdComponent } from './delete-address-by-id/delete-address-by-id.component';


import { GetallAddressComponent } from './getall-address/getall-address.component';
import { AdminComponent } from './admin/admin.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { GetCreditcardComponent } from './get-creditcard/get-creditcard.component';
import { RegistrationComponent } from './registration/registration.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddressComponent } from './address/address.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

import { UpdateAddressComponent } from './update-address/update-address.component';

import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { EditRegistrationComponent } from './edit-registration/edit-registration.component';
import { DeleteRegistrationComponent } from './delete-registration/delete-registration.component';
import { DeleteCreditcardComponent } from './delete-creditcard/delete-creditcard.component';
import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    AddRegistrtionComponent,
    WelcomeComponent,
    GetallRegistrationComponent,
    AddAddressComponent,
    DeleteAddressByIdComponent,
    
    GetallAddressComponent,
    AdminComponent,
    CreditcardComponent,
    GetCreditcardComponent,
    RegistrationComponent,
    TransactionComponent,
    AddressComponent,
    AddTransactionComponent,

    UpdateAddressComponent,


    TransactionDetailsComponent,
    TransactionListComponent,
    EditRegistrationComponent,
    DeleteRegistrationComponent,
    DeleteCreditcardComponent,


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }