import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { Transaction } from './model/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  transactionUrl:string='http://localhost:8484/credit-card/transaction/';


addTransaction(transaction:Transaction):Observable<any>{
  return this.http.post<any>(this.transactionUrl, transaction);
 }

viewTransactionsByCardNo(cardNo:number):Observable<any>{
   return this.http.get(this.transactionUrl+cardNo);
}
 
}