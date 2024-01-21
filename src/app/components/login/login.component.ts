import { Component } from '@angular/core';
import {User} from "../../../user";
import {UserService} from "../../Service/user.service";
import { Router } from '@angular/router';
import { fadeInAnimation} from "./animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInAnimation]
})
export class LoginComponent {

  user:User=new User();
  // isAnimationTriggered: boolean=false;
  animationTrigger: number=0;
  // private router: any;

  constructor(private userService:UserService, private router:Router) {
  }

  // username: string = '';
  // password: string = '';

  userLogin() {
    // You can add authentication logic here, e.g., send a request to a backend service.
    // For simplicity, we'll just log the username and password for now.
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);

    this.userService.loginUser(this.user).subscribe(
      data=>{
            this.animationTrigger++;
            setTimeout(()=>{
              this.router.navigate(['/dashboard']);
            },500);

            // alert("Login Successful");

    },error =>alert("Sorry, Invalid Credentials"));
  }
}
