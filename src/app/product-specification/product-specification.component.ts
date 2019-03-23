import { Component, OnInit } from '@angular/core';
import { Product } from './product.interface';

@Component({
  selector: 'app-product-specification',
  templateUrl: './product-specification.component.html',
  styleUrls: ['./product-specification.component.scss']
})
export class ProductSpecificationComponent implements OnInit {
  
  products: Product = {
    _id: '1', 
    name: 'Coiso', 
    description: 'Bustrinca', 
    images: ['a', 'b', 'c'], 
    energeticValue: 12, 
    protein: 191
  };

  constructor() { }

  ngOnInit() {
  }

}
