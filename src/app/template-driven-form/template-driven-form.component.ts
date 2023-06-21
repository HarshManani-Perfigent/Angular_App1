import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  @ViewChild('form') form!: NgForm;

  // onSubmit() : void {
  //     console.log();
  // }
  jsonObj? : string ;
  onSubmit(form : NgForm)
  {
    console.log(form.value);
    this.jsonObj = form.value;
  }
}
