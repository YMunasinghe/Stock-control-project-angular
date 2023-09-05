import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:8080';
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<any>{
    return  this.httpClient.get<any>('http://localhost:8080/user/getAllUsers')
  }
}
