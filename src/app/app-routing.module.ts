
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GetallRegistrationComponent } from './getall-registration/getall-registration.component';

import { GetallAddressComponent } from './getall-address/getall-address.component';

import { WelcomeComponent } from './welcome/welcome-component';
import { AdminComponent } from './admin/admin.component';
import { AddRegistrtionComponent } from './add-registrtion/add-registrtion.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { TransactionComponent } from './transaction/transaction.component';
import { GetCreditcardComponent } from './get-creditcard/get-creditcard.component';

const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  {path:'admin', component:AdminComponent,
        children:[{
             path:'getall-registran',component:GetallRegistrationComponent}]},
  {path:'registration', component:RegistrationComponent},
  {path:'getallreigistration', component:GetallRegistrationComponent},
  {path:'getcreditcard',component:GetCreditcardComponent},
  {path:'addaddress',component:AddAddressComponent},
  {path:'address',component:AddressComponent},
  {path: 'register', component:AddRegistrtionComponent},
  {path:'addtransaction', component:AddTransactionComponent},
  {path:'getalladdress' , component:GetallAddressComponent},
  {path:'transaction', component:TransactionComponent},
  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
  { path: '**',redirectTo: 'welcome',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
