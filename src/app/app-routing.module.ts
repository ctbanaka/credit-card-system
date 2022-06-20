
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { GetallRegistrationComponent } from './getall-registration/getall-registration.component';
import { WelcomeComponent } from './welcome/welcome-component';

const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  { path: ' ',redirectTo: 'welcome',pathMatch:'full'},
  {path : 'admin',component: AdminComponent,
  children:[{
       path:'getall-registration',component:GetallRegistrationComponent},]},
 
  { path: '**',redirectTo: 'welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
