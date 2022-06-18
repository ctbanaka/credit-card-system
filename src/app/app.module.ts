import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRegistrtionComponent } from './add-registrtion/add-registrtion.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRegistrtionComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
