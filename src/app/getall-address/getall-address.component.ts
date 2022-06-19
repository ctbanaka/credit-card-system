import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';
import { Address } from '../model/address';

@Component({
  selector: 'app-getall-address',
  templateUrl: './getall-address.component.html',
  styleUrls: ['./getall-address.component.css']
})
export class GetallAddressComponent implements OnInit {

   address!:Address[];

  constructor(private service:AddressService) { }

  ngOnInit(): void {
    this.service.getAllAddress()
    .subscribe(data=>{this.address=data.result});
  }

}
