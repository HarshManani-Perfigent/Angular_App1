import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {

  firstName : string = '';
  middleName : string = '';
  lastName : string = '';
  msg : string = '';
  OnFullName(): void{
    this.msg = `${this.firstName} ${this.middleName} ${this.lastName}`;
    this.firstName = '',
    this.middleName = '',
    this.lastName = ''

  }


}
