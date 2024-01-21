import { Component } from '@angular/core';
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

    protected readonly faUserPlus = faUserPlus;

    // protected readonly faUserPlus = faUserPlus;
}
