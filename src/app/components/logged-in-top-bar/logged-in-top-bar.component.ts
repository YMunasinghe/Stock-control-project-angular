import { Component } from '@angular/core';
import {faAngleDown, faAngleUp, faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-logged-in-top-bar',
  templateUrl: './logged-in-top-bar.component.html',
  styleUrls: ['./logged-in-top-bar.component.css']
})
export class LoggedInTopBarComponent {

    protected readonly faUserPlus = faUserPlus;
    protected readonly faAngleUp = faAngleUp;
}
