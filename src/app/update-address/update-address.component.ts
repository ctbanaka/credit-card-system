import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddressService } from '../address.service';
import { Address } from '../model/address';
import { AddressDto } from '../model/addressdto';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {
  sub!: Subscription;
  address!: AddressDto;
  addressForm!:FormGroup;
constructor(private addressService:AddressService) { }

ngOnInit(): void {
  this.addressForm = new FormGroup({
    addressId: new FormControl('', Validators.required),

    city: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    pinCode: new FormControl('',Validators.required)
  });
}
updateAddress():void{
  this.sub=this.addressService.updateAddress(this.addressForm.value).subscribe(
    data=>{this.address=data;
    console.log('ALL:',JSON.stringify(data));
    }
  )
  
}
get addressId(){
  return this.addressForm.get('addressId');
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
  this.updateAddress();
}
}
