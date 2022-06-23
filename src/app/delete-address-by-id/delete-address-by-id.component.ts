import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-delete-address-by-id',
  templateUrl: './delete-address-by-id.component.html',
  styleUrls: ['./delete-address-by-id.component.css']
})
export class DeleteAddressByIdComponent implements OnInit {
     addressId!:number;
    message:any;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
 
  }
  public deleteAddressById(){
    this.addressService.deleteAddressById(this.addressId).subscribe((data)=>this.message=data);
  }
 }

