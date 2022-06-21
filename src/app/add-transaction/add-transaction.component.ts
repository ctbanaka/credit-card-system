import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Transaction } from '../model/transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  transactionForm!:FormGroup;
  transaction!:Transaction;
  sub!: Subscription;
  
  constructor(private transactionService:TransactionService,private router: Router) { }
  
  ngOnInit(): void {

     this.transactionForm= new FormGroup({
      cardNo: new FormControl('',Validators.required,),
      transactionDate: new FormControl(),
      description:new FormControl('',Validators.required),
      debitedBalance: new FormControl('',Validators.required),
      redeemPoints: new FormControl('',Validators.required)

   });
  }


  addingTransaction(){
    console.log(this.transactionForm.value);
    this.transactionService.addTransaction(this.transactionForm.value)

    .subscribe(data =>{console.log(data);
      this.router.navigate(['welcome']);
    })
  }

  onSubmit(){
    this.addingTransaction();
  }
  

}
