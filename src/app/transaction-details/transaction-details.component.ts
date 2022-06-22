import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  id!:number;
  transaction!:Transaction;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

 viewTransaction():void{
  this.transactionService.viewTransactionById(this.id)
  .subscribe(data=>{
    this.id=data;
    console.log(data);
  })
 }

 onSubmit(){
  this.viewTransaction();
 }
}
