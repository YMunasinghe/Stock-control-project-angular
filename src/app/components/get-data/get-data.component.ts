import { Component } from '@angular/core';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent {

  isButtonClick: boolean = false;
  onShowHideBtnClick(isClick: boolean){
    console.log("isClick", isClick);
    this.isButtonClick = isClick;
  }
}
