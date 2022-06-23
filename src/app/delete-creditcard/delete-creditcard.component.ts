import { Component, OnInit } from '@angular/core';
import { CreditcardService } from '../creditcard.service';
import { CreditCard } from '../model/creditcard';

@Component({
  selector: 'app-delete-creditcard',
  templateUrl: './delete-creditcard.component.html',
  styleUrls: ['./delete-creditcard.component.css']
})
export class DeleteCreditcardComponent implements OnInit {
  cardNo!:number;
  creditcard!:CreditCard;
 constructor(private service:CreditcardService) { }

 ngOnInit(): void {
 }

deleteCreditCard(){
 this.service.deleteCreditCard(this.cardNo)
 .subscribe(data=>{
   this.creditcard=data;
   console.log(data);
 })
}

onSubmit(){
 this.deleteCreditCard();
}

}
