
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreditcardListComponent } from './creditcard-list/creditcard-list.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { GetallRegistrationComponent } from './getall-registration/getall-registration.component';
import { CreditCard } from './model/creditcard';
import { WelcomeComponent } from './welcome/welcome-component';

const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
  {path : 'admin',component: AdminComponent,
  children:[{
       path:'getall-registration',component:GetallRegistrationComponent},
       {path:'CreditCard',component:CreditcardListComponent},
       { path:'creditcard',component:CreditcardComponent}]},
 
  { path: '**',redirectTo: 'welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
