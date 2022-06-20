
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallAddressComponent } from './getall-address/getall-address.component';
import { WelcomeComponent } from './welcome/welcome-component';

const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
  { path: '**',redirectTo: 'welcome',pathMatch:'full'},
  {path:'getalladdress' , component:GetallAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
