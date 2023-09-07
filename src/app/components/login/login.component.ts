import { Component } from '@angular/core';
import {User} from "../../../user";
import {UserService} from "../../Service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User=new User();

  constructor(private userService:UserService, private router:Router) {

  }

  // username: string = '';
  // password: string = '';

  userLogin() {
    // You can add authentication logic here, e.g., send a request to a backend service.
    // For simplicity, we'll just log the username and password for now.
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);

    this.userService.loginUser(this.user).subscribe(data=>{
      this.router.navigate(['loggedIn']);
      // alert("Login Successful");
    },error =>alert("Sorry, Invalid Credentials"));
  }
}
