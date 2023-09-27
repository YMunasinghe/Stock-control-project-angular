import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-show-available-items',
  templateUrl: './show-available-items.component.html',
  styleUrls: ['./show-available-items.component.css']
})
export class ShowAvailableItemsComponent {
  // screenWidth: number;
  // screenHeight: number;

  availableItems: string[] = [];

  constructor() {
    // this.screenWidth = window.innerWidth;
    // this.screenHeight = window.innerHeight;

    const data = ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5','Result 1', 'Result 2', 'Result 3'];
    this.availableItems=data;
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.screenWidth = window.innerWidth;
  //   this.screenHeight = window.innerHeight;
  // }

}
