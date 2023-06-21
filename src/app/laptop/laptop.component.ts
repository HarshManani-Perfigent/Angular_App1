import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsServiceService } from '../products-service.service';
import { IProduct } from '../iproduct';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  ProductList : any = '';

  /**
   *
   */
  constructor(private route: ActivatedRoute  ) {
  }
  ngOnInit(): void {
   const myQueryParam = this.route.snapshot.queryParamMap.get('productName');
   console.log(myQueryParam);
    this.ProductList = myQueryParam;
  }

}
