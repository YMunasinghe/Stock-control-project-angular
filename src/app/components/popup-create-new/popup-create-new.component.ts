import {Component, Input} from '@angular/core';
// import {PopupService} from "../popup.service";

@Component({
  selector: 'app-popup-create-new',
  templateUrl: './popup-create-new.component.html',
  styleUrls: ['./popup-create-new.component.css']
})
export class PopupCreateNewComponent {

  // constructor() {}
  // constructor(public popupService: PopupService) {}

  // receivedData: string='';
  //
  // handleDataFromChild(data: string) {
  //   this.receivedData = data;
  // }
  @Input() popupHeader: string='';
}
