import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {

  selectedradio : string = '';

  onSubmit() : void {
    console.log(this.selectedradio);
    alert(this.selectedradio);
  }

  // isChecked : boolean = false;
  // onCheck()
  // {
  //   if(this.isChecked)
  //   {
  //     console.log();
  //   }
  //   else
  //   {
  //     console.log('unchecked');
  //   }
  // }

}
