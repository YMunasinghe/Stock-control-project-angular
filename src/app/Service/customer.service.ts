import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl='http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<any>{
    // return this.httpClient.get<any>('http://localhost:8080/customer/getAllUsers')

    return this.httpClient.get<any>(`${this.apiUrl}`+'/customer/getAllCustomers');
  }
}
