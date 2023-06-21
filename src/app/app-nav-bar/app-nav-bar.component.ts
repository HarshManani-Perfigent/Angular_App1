import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.css']
})
export class AppNavBarComponent {

  /**
   *
   */
  constructor(private router : Router) {
    
  }
  getRadio() : void {
    this.router.navigate(['/radio']);  
  }

  getDropDown() : void {
    this.router.navigate(['/dropdown']);
  }
}
