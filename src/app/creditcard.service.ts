import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {
  private baseUrl = 'http://localhost:8484/credit-card/swagger-ui.html#/admin45controller';

  constructor(private http: HttpClient) { }

  getCreditCard(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCreditCard(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  deleteCreditCard(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCreditCardList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

