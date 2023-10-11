import {Component, Input, Output, EventEmitter} from '@angular/core';
import {setAnalyticsConfig} from "@angular/cli/src/analytics/analytics";
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

  codeTerm: any='';
  nameTerm: any='';
  contactPersonTerm: any='';
  mobileTerm: any='';
  emailTerm: any='';
  addressTerm: any='';

  @Output() code = new EventEmitter<any>();
  @Output() name = new EventEmitter<any>();
  @Output() contactPerson = new EventEmitter<any>();
  @Output() mobile = new EventEmitter<any>();
  @Output() email = new EventEmitter<any>();
  @Output() address = new EventEmitter<any>();

  // confirmPurchase:any=[];

  constructor() {}

  ngOnInit(){
    if (this.popupHeader=='Create Customer'){
    }
  }

  // onClickSubmit(data: any) {
  //   this.confirmPurchase.push(data)
  //   console.log(this.confirmPurchase)
  //   this.sharedService.setCartItemData(this.confirmPurchase);
  //   this.router.navigate(['/confirmation'])
  // }
  saveData() {
    this.code.emit(this.codeTerm)
    this.name.emit(this.nameTerm)
    this.contactPerson.emit(this.contactPersonTerm)
    this.mobile.emit(this.mobileTerm)
    this.email.emit(this.emailTerm)
    this.address.emit(this.addressTerm)
  }
}
