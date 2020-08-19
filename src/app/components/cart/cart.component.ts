import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  cartProducts: any[];
  isCardEMpty: boolean = false;
  cartItemCount: number;
  newList: any[];

  constructor(private productService: ProductService, public router: Router) {
  }

  ngOnInit(): void {
    this.setViewMessage();
  }

  displayDetails(id: any) {
    this.productService.id = id;
    this.router.navigate(['/product']);
  }

  deleteProduct(id: any) {
    this.productService.id = id;
    this.productService.cartProducts.splice(this.productService.cartProducts.findIndex(function (i) {
      return i.id === id;
    }), 1);
    this.cartProducts = this.productService.cartProducts;
    localStorage.removeItem('cartProductList');
    localStorage.setItem('cartProductList', JSON.stringify(this.cartProducts));
    this.setViewMessage();
  }

  setViewMessage() {
    this.newList = JSON.parse(localStorage.getItem('cartProductList'));
    this.productService.cartProducts = [].concat(this.newList);

    if (this.productService.cartProducts.length) {
      this.cartItemCount = this.productService.cartProducts.length;
      this.cartProducts = this.productService.cartProducts;
      this.isCardEMpty = true;
    }
    else
      this.isCardEMpty = false;
  }
}
