import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent {

  bgColor : string = "blue";
  pborder : string = "border border-dark border-2 rounded text text-center";
  setMargin : string = "col-6 m-2";

  changeColor : string = "Color col-6 m-2 border border-dark border-2 rounded text-center";
  btnClass : string = "btn btn-primary m-4" 
  changeParagraphColor() : string {
    if(this.bgColor == "blue")
    {
      this.bgColor = this.changeColor;
    }
    return this.bgColor
  }

}
