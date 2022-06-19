import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8484/credit-card/register/' ;

  userRegistration(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
