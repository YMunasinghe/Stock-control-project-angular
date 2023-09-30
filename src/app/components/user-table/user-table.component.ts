import { Component } from '@angular/core';
import {USERS} from "../../../users";
import {UserService} from "../../Service/user.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  users: any = [];

  constructor(private userService : UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((user)=>{
      console.log("users",user);
      this.users=user;
    })
  }
}
