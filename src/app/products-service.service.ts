import { Injectable } from '@angular/core';
import { Products } from './products';
import { IProduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {


  constructor() { }

  GetProducts(): IProduct[] {
    
    let ProductList:IProduct[]  = [
      { Id: 101, Name: 'laptop', Rate: 120 , 'images' : '../assets/laptop.jpg' },
      { Id: 102, Name: 'mobile', Rate: 120, 'images' : '../assets/mobile.jpg'  },
      { Id: 103, Name: 'headphone', Rate: 20 ,'images' : '../assets/headphone.jpg'  },
    ];
    return ProductList;
  }
}
