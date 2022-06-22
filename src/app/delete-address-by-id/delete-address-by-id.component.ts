import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-delete-address-by-id',
  templateUrl: './delete-address-by-id.component.html',
  styleUrls: ['./delete-address-by-id.component.css']
})
export class DeleteAddressByIdComponent implements OnInit {
     address!:Address;
     router: any;

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  //  this.address.getAddressById()
  //  .subscribe(data=>{this.address=data;
  //  console.log(data)
  // });
  }
//  deleteAddress():void{
//   this.sub=this.addressService.addresssService.deleteAddressById()
//   .subscribe(data=>{this.address=data;
//    console.log('ALL:',JSON.stringify(data));
//   }

//   )
 }

