import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
    addaddressForm = new FormGroup({
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required]),

    })
    get city(){
      return this.addaddressForm.get('city');
    }
    get state(){
      return this.addaddressForm.get('state');
    }
    get pincode(){
      return this.addaddressForm.get('pincod');
    }

  
  constructor() { }

  ngOnInit(): void {
  }

}
