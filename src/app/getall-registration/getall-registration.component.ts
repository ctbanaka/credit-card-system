import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../model/registration';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-getall-registration',
  templateUrl: './getall-registration.component.html',
  styleUrls: ['./getall-registration.component.css']
})
export class GetallRegistrationComponent implements OnInit {

    registration!:Registration[];

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
   this.service.getUserRegistration()
   .subscribe(data=>{this.registration=data;
              console.log(data)});
   
   
  }
  
}
