import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8484/credit-card/address/';

  getAllAddress(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
  // editAddress(): Observable<any>{
  //   return this.http.put<any>(this.baseUrl);
  //}
  userAddress(address:Address) : Observable<any>{
    return this.http.post<any>(this.baseUrl,address);
  }
}

