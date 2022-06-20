
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GetallRegistrationComponent } from './getall-registration/getall-registration.component';
import { CreditCard } from './model/creditcard';
import { GetallAddressComponent } from './getall-address/getall-address.component';

import { WelcomeComponent } from './welcome/welcome-component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
  {path : 'admin',component:AdminComponent,
  children:[{
       path:'getall-registration',component:GetallRegistrationComponent},
    ]},
 


  { path: '**',redirectTo: 'welcome',pathMatch:'full'},
  {path:'getalladdress' , component:GetallAddressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
