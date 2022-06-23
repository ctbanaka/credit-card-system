import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../creditcard.service';
import { CreditCard } from '../model/creditcard';
//import {Router} from "@angular/router";

@Component({
  selector: 'app-get-creditcard',
  templateUrl: './get-creditcard.component.html',
  styleUrls: ['./get-creditcard.component.css']
})
export class GetCreditcardComponent implements OnInit {
  cardno!:number;
  creditcard!:CreditCard[];


  constructor(private service: CreditcardService) { }

  ngOnInit(): void {
    this.service.getCreditCard()
   .subscribe(data=>{this.creditcard=data;
              console.log(data)});
   
   
  }
  //deleteCreditCard(cardNo:number) {
    //this.service.deleteCreditCard(cardNo)
      //.subscribe(data => {this.creditcard=data;
         // console.log(data)});
         
  
  
 // }
 public deleteCreditCard(){
  this.service.deleteCreditCard(this.cardno)
   .subscribe((data)=>this.creditcard=data);
 }
}
