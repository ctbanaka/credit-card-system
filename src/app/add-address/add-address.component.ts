import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  sub!:Subscription;
  
  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }

}
