import { DatePipe } from '@angular/common';
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
  filteredTransaction!:Transaction[];
  transactions!:Transaction[];
  constructor(private transactionSrvice:TransactionService,private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
  }
 
  transactionDetails():void{
    this.transactionSrvice.viewTransactionsByCardNo(this.cardno)
    .subscribe(data=>{
      this.transactions=data;
      this.filteredTransaction=data;
      console.log(data);
    })
  }

  onSubmit(){
    this.transactionDetails();
    
  }

  displayDate(date:Date):any{
    return this.datepipe.transform(date, 'dd-MM-yyyy');
   }
 
   filtertrans():Transaction[]{
    if(this.startDate!=null&&this.endDate!=null){
    return this.transactions.filter((transaction:Transaction)=>
    (transaction.transactionDate>=this.startDate&&transaction.transactionDate<=this.endDate));
    }
    else{
      return this.transactions;
    }
   }

   callFilterTrans(){
    this.filteredTransaction=this.filtertrans();
   }
  }