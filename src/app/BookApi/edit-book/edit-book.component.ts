import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IBook } from 'src/app/Ibook';
import { BookDataService } from 'src/app/book-data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  myform ={
    'id' : 0,
    'title' : '',
    'rate' : 0
  }

constructor(private activerouter : ActivatedRoute , private http: HttpClient, private bookdataservice : BookDataService, private router : Router ,private toast : ToastrService) {}
  ngOnInit(): void {
  //  debugger
    this.activerouter.params.subscribe(params => {
      const id = params['id'];
      this.fetchTableData(id);
    });
  }

fetchTableData(id: number)
{
    this.http.get<IBook>(`https://localhost:7137/api/Book/GetBookById/${id}`).subscribe((data)=>{
    console.log(data);
    this.myform.id = data.id;
    this.myform.title = data.title;
    this.myform.rate = data.rate;
  });                       
}

onSubmit(form : NgForm){
   this.myform.title = form.value.title;
   this.myform.rate = form.value.rate;
   this.toast.success('Data Updated Successfully', 'Success');
    this.bookdataservice.editBook(this.myform).subscribe(result =>{
      console.log(result);
        this.router.navigate(['/GetBooks']);
      });                       
  }
}
