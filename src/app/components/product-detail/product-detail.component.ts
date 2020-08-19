import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any    
    
  constructor(private productService: ProductService,    
    private route: ActivatedRoute) { }    
    
  ngOnInit(){    
    this.product = this.productService.id;
  } 

}
