import {Component, Input, Output, EventEmitter} from '@angular/core';
import {setAnalyticsConfig} from "@angular/cli/src/analytics/analytics";
// import {PopupService} from "../popup.service";
// import {CustomerDTO} from "../../Service/customer";
// import {CustomerDTO} from "../customer";
// import { CustomerDTO } from './app/customer';
import * as moment from 'moment';
import {CustomerDTO} from "../../customer";
import {CustomerService} from "../../Service/customer.service";
import {timeout} from "rxjs";

@Component({
  selector: 'app-popup-create-new',
  templateUrl: './popup-create-new.component.html',
  styleUrls: ['./popup-create-new.component.css']
})
export class PopupCreateNewComponent {

  customerDTO : CustomerDTO = new CustomerDTO();

  // constructor() {}
  // constructor(public popupService: PopupService) {}

  // receivedData: string='';
  //
  // handleDataFromChild(data: string) {
  //   this.receivedData = data;
  // }
  @Input() popupHeader: string='';
  @Input() checkCustomerHeader: string='';

  /**
   * use to show
   *  new customer created or not
   */
  showAfterCreated: string='';
  textColor: string=''; // set text color to previous text

  // currentDate = moment();

  codeTerm: any='';
  nameTerm: any='';
  contactPersonTerm: any='';
  mobileTerm: any='';
  emailTerm: any='';
  addressTerm: any='';

  @Output() code = new EventEmitter<any>();
  // @Output() name = new EventEmitter<any>();
  // @Output() contactPerson = new EventEmitter<any>();
  // @Output() mobile = new EventEmitter<any>();
  // @Output() email = new EventEmitter<any>();
  // @Output() address = new EventEmitter<any>();

  // confirmPurchase:any=[];

  constructor(private customerService:CustomerService) {}

  ngOnInit(){
  }
  // onClickSubmit(data: any) {
  //   this.confirmPurchase.push(data)
  //   console.log(this.confirmPurchase)
  //   this.sharedService.setCartItemData(this.confirmPurchase);
  //   this.router.navigate(['/confirmation'])
  // }


  saveData() {
    if (this.codeTerm!=='' && this.nameTerm!==''){
      const now = new Date();
      // this.code.emit(this.codeTerm)
      // this.name.emit(this.nameTerm)
      // this.contactPerson.emit(this.contactPersonTerm)
      // this.mobile.emit(this.mobileTerm)
      // this.email.emit(this.emailTerm)
      // this.address.emit(this.addressTerm)

      this.textColor='#03C988';
      this.showAfterCreated='Successfully Created '+this.codeTerm;
      setTimeout(()=>{
        this.showAfterCreated='';
      },3000);
      // if(this.codeTerm!==null){
      /**
       * code to save the data
       */
      if (this.popupHeader==this.checkCustomerHeader){
        this.customerDTO.customerCode=this.codeTerm
        this.customerDTO.customerName=this.nameTerm
        this.customerDTO.customerContactPerson=this.contactPersonTerm
        this.customerDTO.customerMobile=this.mobileTerm
        this.customerDTO.customerEmail=this.emailTerm
        this.customerDTO.customerAddress=this.addressTerm
        this.customerDTO.customerCreatedDate=now.getDate().toString()+"-"+now.getMonth().toString()+"-"+now.getFullYear().toString();
        this.customerDTO.customerCreatedTime=moment().format('HH:mm:ss')
        this.customerDTO.customerUpdatedDate=now.getDate().toString()+"-"+now.getMonth().toString()+"-"+now.getFullYear().toString();
        this.customerDTO.customerUpdatedTime=moment().format('HH:mm:ss')

        this.customerService.saveCustomer(this.customerDTO)
          .subscribe();
      }
      // }
      // console.log(this.codeTerm)
      this.codeTerm='';
      this.nameTerm='';
      this.contactPersonTerm='';
      this.mobileTerm='';
      this.emailTerm='';
      this.addressTerm='';
    }else {
      this.textColor='red';
      this.showAfterCreated='Customer details required'+this.codeTerm;

      setTimeout(()=>{
        this.showAfterCreated='';
      },3000);
    }
  }


  clearTheForm() {
    this.codeTerm='';
    this.nameTerm='';
    this.contactPersonTerm='';
    this.mobileTerm='';
    this.emailTerm='';
    this.addressTerm='';
  }
}
