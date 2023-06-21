import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {

  selectLanguage : string = '';
  getValue(event :Event): void{
    console.log(event);
    let t = event.target as HTMLSelectElement;
    // let t = event.target ;

    this.selectLanguage = t.value;
  }


}
