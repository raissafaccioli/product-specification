import { Component, OnInit } from '@angular/core';
import { Product } from './product.interface';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-product-specification',
  templateUrl: './product-specification.component.html',
  styleUrls: ['./product-specification.component.scss']
})
export class ProductSpecificationComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  product: Product = {
    _id: '1', 
    name: 'Coiso', 
    price: 22.12,
    description: 'Bustrinca', 
    images: ['a', 'b', 'c'], 
    energeticValue: 12, 
    protein: 191
  };
  
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '300px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Zoom,
        arrowPrevIcon: 'fa fa-angle-left',
        arrowNextIcon: 'fa fa-angle-right',
        closeIcon: 'fa fa-times'
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '100%',
        height: '600px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/salsicha-vegana/lata.jpg',
        medium: 'assets/images/salsicha-vegana/lata.jpg',
        big: 'assets/images/salsicha-vegana/lata.jpg'
      },
      {
        small: 'assets/images/salsicha-vegana/salsicha-vegetal.jpg',
        medium: 'assets/images/salsicha-vegana/salsicha-vegetal.jpg',
        big: 'assets/images/salsicha-vegana/salsicha-vegetal.jpg'
      },
      {
        small: 'assets/images/salsicha-vegana/prato2.jpg',
        medium: 'assets/images/salsicha-vegana/prato2.jpg',
        big: 'assets/images/salsicha-vegana/prato2.jpg'
      }
    ];
  }

  sendProduct(event) {
    alert(event);
  }
}

