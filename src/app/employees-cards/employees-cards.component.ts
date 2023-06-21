import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employees-cards',
  templateUrl: './employees-cards.component.html',
  styleUrls: ['./employees-cards.component.css']
})
export class EmployeesCardsComponent  implements OnInit{

  EmployeesList : Employee [] = []

  /**
   *
   */
  constructor(private employeeDataService : EmployeeDataService) {
    
  }
  ngOnInit(): void {
    this.EmployeesList = this.employeeDataService.GetEmployees();
  }

}
