import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts = [];
  id: any;
  type: string;
  cartProducts = [];

  getImages() {
    return this.allProducts = productDetails.slice(0);
  }

  getSpecificProducts(type: string) {
    this.allProducts = productDetails.reduce((a, o) => (o.type.toLowerCase() == type.toLowerCase() && a.push(o), a), []);
    return this.allProducts;
  }

  getImage(id: number) {
    return productDetails.slice(0).find(Products => Products.id == id)
  }
  constructor() { }
}

const productDetails = [
  { "id": 1, "type": "Lipstick", "url": "assets/Products/l1.jpg", "description": "lipstick", "Price": " 599" },
  { "id": 2, "type": "Lipstick", "url": "assets/Products/l5.jpg", "description": "lipstick", "Price": " 499" },
  { "id": 3, "type": "facewash", "url": "assets/Products/f1.jpg", "description": "facewash ", "Price": " 99" },
  { "id": 4, "type": "mositurizer", "url": "assets/Products/m3.jpg", "description": "moisturizer", "Price": "450" },
  { "id": 5, "type": "moisturizer", "url": "assets/Products/m4.jpg", "description": "moisturizer ", "Price": "460" },
  { "id": 6, "type": "Lipstick", "url": "assets/Products/l4.jpg", "description": "lipstick", "Price": " 199" },
  { "id": 7, "type": "facewash", "url": "assets/Products/f2.jpg", "description": "facewash ", "Price": " 199" },
  { "id": 8, "type": "facewash", "url": "assets/Products/f3.jpg", "description": "facewash ", "Price": " 299" },
  { "id": 9, "type": "Lipstick", "url": "assets/Products/l2.jpg", "description": "lipstick", "Price": " 299" },
  { "id": 10, "type": "Lipstick", "url": "assets/Products/l3.jpg", "description": "lipstick", "Price": " 399" },
  { "id": 11, "type": "facewash", "url": "assets/Products/f4.jpg", "description": "facewash", "Price": " 399" },
  { "id": 12, "type": "facewash", "url": "assets/Products/f5.jpg", "description": "facewash ", "Price": "99" },
  { "id": 13, "type": "moisturizer", "url": "assets/Products/m1.jpg", "description": "moisturizer", "Price": "299" },
  { "id": 14, "type": "moisturizer", "url": "assets/Products/m2.jpg", "description": "moisturizer", "Price": "320" },
  { "id": 15, "type": "moisturizer", "url": "assets/Products/m5.jpg", "description": "moisturizer ", "Price": "200" }
];