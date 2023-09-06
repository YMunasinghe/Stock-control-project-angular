import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl='http://localhost:8080';
  private baseUrl='http://localhost:8080/user/login';
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<any>{
    return  this.httpClient.get<any>('http://localhost:8080/user/getAllUsers')
  }

  loginUser(user:User):Observable<object>{
    // return this.httpClient.post(`${this.apiUrl}`+'/user/login',user);
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
