import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit{
  EmployeesList : Employee[] = [];
  // values = ['Map', 'Filter', 'Find'];
  arrayValue = [{'Id' : 1, 'Name' : 'Map' , 'Fname' : 'Mapfname'},{'Id' : 2, 'Name' : 'Filter', 'Fname' : 'Filterfname'},{'Id' : 3, 'Name' : 'Find','Fname' : 'Mapfname'}];
  defaultvalue : string = '';

  constructor(private employeeDataService : EmployeeDataService) {
     
  }
  ngOnInit(): void {
    this.EmployeesList = this.employeeDataService.GetEmployees();
  }

  // getData()
  // {
  //   this.defaultvalue = val.
  // }
  getSelect(val : any , data : any) : void {
    let storeName;
  

    if(val == "Map")
    {
      storeName = this.EmployeesList.filter(x => x.Salary >= data).map(item => item.EmpName);
      console.log("Map-->",storeName);
      // this.EmployeesList.map(x => (x.Salary) >= data? console.log(x.EmpName) : console.log("Not available"));
    }
    if(val == "Filter")
    {
      storeName = this.EmployeesList.filter(x => (x.Salary) >= data);
      console.log("Filter-->",storeName);
    }
    if(val == "Find")
    {
      storeName= this.EmployeesList.find(x => (x.Salary) >= data);
      console.log("Find-->",storeName ? storeName.EmpName : "Not available");
    }
  }

}
