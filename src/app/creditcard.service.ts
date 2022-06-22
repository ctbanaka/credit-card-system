import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from './model/creditcard';





@Injectable({
  providedIn: 'root'
})
export class CreditcardService {
  private baseUrl = 'http://localhost:8484/credit-card/admin';

  constructor(private http: HttpClient) { }

  getCreditCard(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  createCreditCard(creditcard: CreditCard): Observable<any> {
    return this.http.post(`${this.baseUrl}`, creditcard);
  }

  deleteCreditCard(creditcard:CreditCard): Observable<any>{
    return this.http.delete(`${this.baseUrl}`);
  }
 
}

