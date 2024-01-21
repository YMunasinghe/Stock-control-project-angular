import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
// import {CustomerDTO} from "./customer";
import {CustomerDTO} from "../customer";
import {SupplierDTO} from "../supplier";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl='http://localhost:8080';
  private customerName: any='';
  private supplierName: any='';
  private productCategoryName: any='';

  setProductCategoryName(data: any): void {
    this.productCategoryName = data;
  }

  getProductCategoryName(): any {
    return this.productCategoryName;
  }

  setCustomerName(data: any): void {
    this.customerName = data;
  }

  getCustomerName(): any {
    return this.customerName;
  }

  setSupplierName(value: any):void {
    this.supplierName = value;
  }

  getSupplierName(): any {
    return this.supplierName;
  }

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<any>{
    // return this.httpClient.get<any>('http://localhost:8080/customer/getAllUsers')
    return this.httpClient.get<any>(`${this.apiUrl}`+'/customer/getAllCustomers');
  }

  searchCustomer():Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}`+'/customer/getCustomerByName/'+`${this.customerName}`);
  }

  saveCustomer(customer?:CustomerDTO): Observable<object>{
    return this.httpClient.post<object>(`http://localhost:8080/customer/addCustomer`,customer);
  }

  getSuppliers():Observable<any>{
    // return this.httpClient.get<any>('http://localhost:8080/customer/getAllUsers')
    return this.httpClient.get<any>(`${this.apiUrl}`+'/supplier/getAllSuppliers');
  }

  searchSuppliers():Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}`+'/supplier/getSupplierByName/'+`${this.supplierName}`);
  }

  saveSuppliers(supplier?:SupplierDTO): Observable<object>{
    return this.httpClient.post<object>(`http://localhost:8080/supplier/addSupplier`,supplier);
  }

  getProductCategories():Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}`+'/productCategory/getAllProductCategories');
  }

  searchProductCategory():Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}`+'/supplier/getSupplierByName/'+`${this.supplierName}`);
  }



}
