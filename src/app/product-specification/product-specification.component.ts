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
    name: 'Carne Vegetal',
    price: 16.50,
    description: 'A linha de "Pratos Prontos", segue as mesmas propriedades das proteínas pré-cozidas de aliar saúde e qualidade de vida a alimentos rápidos que a rotina atual nos impõe. Um objetivo com a utilização de produtos 100% naturais que só a Superbom conseguiu atingir através da Soy Good. Sua formulação inclui o óleo de canola (riquíssimo em ômega-3), ácido alfalinolênico e ácido linoléico. Estão disponíveis nas versões “Molho Bolonhesa Vegetariano”, “Medalhão ao Molho Madeira”, “Almôndega Vegetariana ao Sugo”, "Jardineira ao Molho", "Cubinhos ao Molho Caseiro" e "Escalope ao Molho Caseiro".', 
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

  emitProduct(product: Product) {
    console.log(product);
    const buyElement = document.querySelector('buy-box');
    if(buyElement != null) {
      buyElement['message'] = product;
      console.log(buyElement);
    }
  }
}

