import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../creditcard.service';
import { CreditCard } from '../model/creditcard';
import {Router} from "@angular/router";

@Component({
  selector: 'app-get-creditcard',
  templateUrl: './get-creditcard.component.html',
  styleUrls: ['./get-creditcard.component.css']
})
export class GetCreditcardComponent implements OnInit {
  creditcard!:CreditCard[];
  router: any;

  constructor(private service: CreditcardService) { }

  ngOnInit(): void {
   this.service.getCreditCard()
   .subscribe(data=>{this.creditcard=data;
              console.log(data)});
   
   
  }
  deleteCreditCard(cardNo: any) {
    this.service.deleteCreditCard(cardNo)
      .subscribe(data => {this.creditcard=data;
          console.log(data)});
         
  }
  
  createCreditCard(): void{
       this.router.navigate(['creditcard']);
  };
  }
