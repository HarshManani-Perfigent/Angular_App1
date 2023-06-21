import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsServiceService } from '../products-service.service';
import { Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { MobileComponent } from '../mobile/mobile.component';
import { LaptopComponent } from '../laptop/laptop.component';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {
  // ProductList:Product[] = [{'Id' : 101 , 'Name' : 'Brush', 'Rate' : 120},{'Id' : 102 , 'Name' : 'Toothpaste', 'Rate' : 120}, {'Id' : 103 , 'Name' : 'Sev', 'Rate' : 20} ]

  ProductList:IProduct[] = [];

  /**
   *
   */
  constructor(private productDataService: ProductsServiceService , private router : Router ) {
  }
  ngOnInit(): void {
   this.ProductList = this.productDataService.GetProducts();
  } 

  getData(name : string) : void{
    this.router.navigate(['/products',name],
    // { queryParams: {productName : name }}
    );

  }

}