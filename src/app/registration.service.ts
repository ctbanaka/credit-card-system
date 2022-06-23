import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:8484/credit-card/register/' ;



  getUserRegistration(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
  
  userRegistration(register:Registration): Observable<any>{
    return this.http.post<any>(this.baseUrl, register);

  }
 
  editRegistration(register:Registration):Observable<any>{
    return this.http.put<any>(this.baseUrl, register);
  }

  deleteRegistration(userId:number):Observable<any>{
    return this.http.delete(this.baseUrl+userId);
  }
}
