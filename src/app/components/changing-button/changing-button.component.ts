import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-changing-button',
  templateUrl: './changing-button.component.html',
  styleUrls: ['./changing-button.component.css']
})
export class ChangingButtonComponent implements OnInit{

  @Output() onShowHideBtnClick : EventEmitter<boolean>=new EventEmitter<boolean>();
  isButtonClick: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  onBtnClick() {
    this.isButtonClick = !this.isButtonClick;
    console.log("this.isButtonClick" ,this.isButtonClick);

    this.onShowHideBtnClick.emit(this.isButtonClick);
  }
}
