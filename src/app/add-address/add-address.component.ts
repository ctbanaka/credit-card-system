import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AddressService } from '../address.service';
import { Address } from '../model/address';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
    addressForm! : FormGroup;
    address!: Address;
    sub! :Subscription
    
   

  
  constructor(
    private router: Router,
    private  addressService: AddressService,
  ) { }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      
      userId: new FormControl('',Validators.required),
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      pinCode: new FormControl('',[Validators.required,Validators.maxLength(6)])
    });
  }

  userAddress(){
    console.log(this.addressForm.value);
 this.addressService.userAddress(this.addressForm.value)
  
    .subscribe(data =>{console.log(data);
      this.router.navigate(['welcome']);
    })
  
  }
  get city() {
    return this.addressForm.get('city');
  }
  get state(){
    return this.addressForm.get('state');
  } 
  get pinCode(){
    return this.addressForm.get('pinCode');
  }
onSubmit(){
  this.userAddress();
}
}

