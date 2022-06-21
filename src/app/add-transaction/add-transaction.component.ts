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
  
  constructor(private service:TransactionService,private router: Router,) { }

  ngOnInit(): void {

    this.transactionForm=new FormGroup({
      cardNo: new FormControl('',Validators.required,),
      transactionDate: new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      debitedBalance: new FormControl('',Validators.required),
      redeemPoints: new FormControl('',Validators.required)

    });
  }


  addingTransaction(){
    console.log(this.transactionForm.value);
    this.service.addTransaction(this.transactionForm.value)

    .subscribe(data =>{console.log(data);
      this.router.navigate(['welcome']);
    })
  }

  onsubmit(){
    this.addingTransaction();
  }
  

}
