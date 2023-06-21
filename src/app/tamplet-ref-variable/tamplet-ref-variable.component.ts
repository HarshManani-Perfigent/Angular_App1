import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tamplet-ref-variable',
  templateUrl: './tamplet-ref-variable.component.html',
  styleUrls: ['./tamplet-ref-variable.component.css']
})
export class TampletRefVariableComponent {
 msg : string = '';
  // any means datatype
  getData(data : HTMLInputElement){ 
    console.log(typeof(data));
    console.log(data.value);
    console.warn(data);
    
    // this.msg = data;
  }

    fullName : string = '';
    show(Name: any , name2 : any){
      this.fullName = ` ${Name.value} ${name2.value}`;
  

    }



}
