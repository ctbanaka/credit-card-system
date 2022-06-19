import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8484/address/';

  getAllAddress(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
