import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productList: any []= [];
  productObj : any = {
    productName:'',
    productCategory:'',
    isStockAvailable: false,
    productPrice: '',
    discount: '',
    productImageUrl: ''
  };
  constructor() {
    const localData = localStorage.getItem('products');
    if(localData != null) {
      this.productList = JSON.parse(localData);
    }
   }

  ngOnInit(): void {
  }
  onSaveProduct() {
    this.productList.push(this.productObj);
    localStorage.setItem('products', JSON.stringify(this.productList));
  }

}
