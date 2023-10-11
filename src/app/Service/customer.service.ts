import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerDTO} from "./customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl='http://localhost:8080';
  private customerName: any='';

  setCustomerName(data: any): void {
    this.customerName = data;
  }

  getCustomerName(): any {
    return this.customerName;
  }

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<any>{
    // return this.httpClient.get<any>('http://localhost:8080/customer/getAllUsers')

    return this.httpClient.get<any>(`${this.apiUrl}`+'/customer/getAllCustomers');
  }

  searchCustomer():Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}`+'/customer/getCustomerByName/'+`${this.customerName}`);
  }

  saveStudent(customer?:CustomerDTO): Observable<object>{
    return this.httpClient.post<object>(`http://localhost:8080/customer/addCustomer`,customer);

  }
}
