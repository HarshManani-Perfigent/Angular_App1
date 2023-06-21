import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {

    this.S1.SId = 1
    this.S1.FirstName = 'Riya'
    this.S1.LastName = 'Yadav'
  }
  title = 'MyNewApp';
  Designation : string = 'Develop'

  S1: Student = new Student();

  StudentList : Student[] = [{'SId': 1, 'FirstName' : 'Sushma', 'LastName' : 'Mourya'}, {'SId': 2, 'FirstName' : 'Shivani', 'LastName' : 'Singh'},
  {'SId': 3, 'FirstName' : 'Janvi', 'LastName' : 'Sharma'}]


  Simplefun() : void{
    console.log("calling function");
  }

  ChangeStudentDetalis() : void{
    this.StudentList.forEach(element => {
      if(element.SId == 1)
      element.SId = 4,
      element.FirstName = 'Riya',
      element.LastName = 'Yadav'
    });
  }

  Id : number = 101;
  Name : string = "Reeya";
  hidden : boolean = true;
  
  image : string = "../favicon.ico";
  Showtextbox() : void{
  this.hidden = false;
  }
msg : string = ''
 getData(event : any)
 {
  console.log(event.key);
 }

 changevalue() : void
 { 
  this.Id = 102;
  this.Name = "Deeya";
 }
 changevalue1() {
  this.Id = 101;
  this.Name = "Seeya";
 }
}
