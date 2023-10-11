import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SharedService {

  public popUpFormData = new BehaviorSubject<any>([]);

  constructor() { }

  setCartItemData(data: any) {
    this.popUpFormData.next(data);
  }

  getCartItemData() {
    return this.popUpFormData.asObservable();
  }
}
