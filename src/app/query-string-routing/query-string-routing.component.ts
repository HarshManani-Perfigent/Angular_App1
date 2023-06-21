import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-query-string-routing',
  templateUrl: './query-string-routing.component.html',
  styleUrls: ['./query-string-routing.component.css']
})
export class QueryStringRoutingComponent implements OnInit {
  // store = window.location.search;
  // id = new URLSearchParams(this.store);
  
  id : string = '';
  
  constructor(private route : ActivatedRoute) {
    
  }
  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {
    //   const myQueryParam = params['empid'];
    //   console.log(myQueryParam);
    // });

    const myQueryParam = this.route.snapshot.queryParamMap.get('empid');
    console.log(myQueryParam);
  }

}
