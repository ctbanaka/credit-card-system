import { Component, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
   
  cardno!:number;
  startDate!:Date;
  endDate!:Date;
  transactions!:Transaction[];
  constructor(private transactionSrvice:TransactionService) { }

  ngOnInit(): void {
  }
 
  transactionDetails():void{
    this.transactionSrvice.viewTransactionsByCardNo(this.cardno)
    .subscribe(data=>{
      this.transactions=data;
      console.log(data);
    })
  }

  onSubmit(){
    this.transactionDetails();
  }
}
