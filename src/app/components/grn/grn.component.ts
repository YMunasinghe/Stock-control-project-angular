import { Component } from '@angular/core';
import {DataService} from "../../Service/data.service";

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.css']
})
export class GrnComponent {

  productCategory: any;

  suppliers: any = [];
  products: any = [];


  selectedSupplier: any='';
  selectedProduct: any='';
  quantityTerm: any = '';
  priceTerm: any = '';

  constructor(private dataService : DataService) {
  }

  ngOnInit()  {
    this.dataService.getSuppliers().subscribe((suppliers)=>{
      this.suppliers=suppliers;
    })

    this.dataService.getProducts().subscribe((products)=>{
      this.products=products;
    })
  }

  clearTheForm() {

  }

  saveData() {

  }
}
