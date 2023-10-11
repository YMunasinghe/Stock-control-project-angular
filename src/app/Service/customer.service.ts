import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl='http://localhost:8080';
  private customerName: any='';


  // get customerName(): string {
  //   return this._customerName;
  // }
  //
  // set customerName(value: string) {
  //   this._customerName = value;
  // }
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
    // http://localhost:8080/customer/getCustomerByName/k
  }
}
