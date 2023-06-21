import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-detailes',
  templateUrl: './employees-detailes.component.html',
  styleUrls: ['./employees-detailes.component.css']
})
export class EmployeesDetailesComponent implements OnInit{

  EmployeesList : Employee[] = [];

  /**
   *
   */
  constructor(private employeeDataService : EmployeeDataService, private router : Router) {
    
    
  }
  ngOnInit(): void {

    this.EmployeesList = this.employeeDataService.GetEmployees();

  }

  showData(empID : number) : void {
    this.router.navigate(
      ['/queryString'],
      { queryParams: {empid : empID }}
    );
  }

}
