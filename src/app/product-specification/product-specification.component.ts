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
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
        {
            small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3CuNzOrmWhos3MXI0v_KkyO_xrZ5Y8hFxSYGj_6OtUygZUUX',
            medium: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3CuNzOrmWhos3MXI0v_KkyO_xrZ5Y8hFxSYGj_6OtUygZUUX',
            big: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3CuNzOrmWhos3MXI0v_KkyO_xrZ5Y8hFxSYGj_6OtUygZUUX'
        },
        {
            small: 'https://www.w3schools.com/w3css/img_lights.jpg',
            medium: 'https://www.w3schools.com/w3css/img_lights.jpg',
            big: 'https://www.w3schools.com/w3css/img_lights.jpg'
        },
        {
            small: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Sunflower_Helianthus_1_edited.png',
            medium: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Sunflower_Helianthus_1_edited.png',
            big: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Sunflower_Helianthus_1_edited.png'
        }
    ];
  }
}

