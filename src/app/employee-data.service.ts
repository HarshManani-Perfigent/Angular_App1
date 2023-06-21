import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataService {
  constructor() {}

  GetEmployees(): Employee[] {
    let employeelist: Employee[] = [
      {
        EmpId: 101,
        EmpName: 'Reeya',
        Salary: 12000,
        Designation: 'Developer',
        Photograph: '../assets/emp.jpg ',
        isEmployee: true,
      },
      {
        EmpId: 102,
        EmpName: 'Divya',
        Salary: 15000,
        Designation: 'Desginer',
        Photograph: '../assets/emp.jpg',
        isEmployee: true,
      },
      {
        EmpId: 103,
        EmpName: 'Mukesh',
        Salary: 20000,
        Designation: 'Desginer',
        Photograph: '../assets/emp.jpg',
        isEmployee: true,
      },
      {
        EmpId: 104,
        EmpName: 'Rahul',
        Salary: 25000,
        Designation: 'Developer',
        Photograph: '../assets/emp.jpg',
        isEmployee: false,
      },
    ];
    return employeelist;
  }
}
