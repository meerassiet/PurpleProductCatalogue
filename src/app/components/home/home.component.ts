import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[];
  filterBy?: string = 'all'
  allProducts: any[] = [];
  allProduct: any;
  selectedType: any;
  TextSearch: string;
  foundProducts: boolean = true;
  cartItemCount: number;
  cartProducts;
  newList: any;


  constructor(private productService: ProductService, public router: Router) {
    this.allProducts = this.productService.getImages();
  }
  ngOnChanges() {
    this.allProducts = this.productService.getImages();
    if (localStorage.getItem('cartItemCount'))
      this.cartItemCount = JSON.parse(localStorage.getItem('cartItemCount'));
  }

  ngOnInit() {
    this.cartProducts = [];
  }

  displayDetails(id: any) {
    this.productService.id = id;
    this.router.navigate(['/product']);
  }

  open(menu: { openMenu: () => void; }) {
    menu.openMenu();
  }

  onEnter() {
    this.foundProducts = true;
    this.allProducts = this.productService.getSpecificProducts(this.TextSearch);
    if (this.allProducts.length)
      this.foundProducts = true;
    else
      this.foundProducts = false;
  }

  DisplayAll() {
    this.router.navigate(['/product']);

  }

  goToHome() {
    this.foundProducts = true;
    this.allProducts = this.productService.getImages();
  }

  addToCart(prd) {
    // localStorage.removeItem('cartProductList');
    if (localStorage.getItem('cartProductList'))
      this.cartProducts = JSON.parse(localStorage.getItem('cartProductList'));
    this.cartProducts.push(prd);
    this.cartItemCount = this.cartProducts.length;
    localStorage.setItem('cartProductList', JSON.stringify(this.cartProducts));
    localStorage.setItem('cartItemCount', JSON.stringify(this.cartProducts.length));
  }

  openCart() {
    this.newList = [];
    this.newList = localStorage.getItem('cartProductList');
    this.productService.cartProducts = this.newList;
    this.router.navigate(['/cart']);
  }

  logout() {

  }
}

