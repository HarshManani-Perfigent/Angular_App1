import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IBook } from 'src/app/Ibook';
import { BookDataService } from 'src/app/book-data.service';

@Component({
  selector: 'app-set-books',
  templateUrl: './set-books.component.html',
  styleUrls: ['./set-books.component.css']
})
export class SetBooksComponent {
   myform = {
    'title': '',
    'rate': '',
  };
  constructor(private bookDataService : BookDataService, private router: Router, private toast : ToastrService) { }

 

  onSubmit(form : NgForm)
  {
    // debugger
    this.toast.success('Data Inserted Successfully', 'Success');
    console.log(form);
    this.bookDataService.insertBook(form.value).subscribe(data=>{
      console.log(data);
      if(data){
        this.router.navigate(['/GetBooks']);
      }
    
    }); 
  }
 
}
