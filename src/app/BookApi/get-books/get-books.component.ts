import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/Ibook';
import { BookDataService } from 'src/app/book-data.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent implements OnInit, OnDestroy {
  
  bookList? : IBook[];
  sub? : Subscription;
  filterText = "";

  constructor(private bookDataService : BookDataService ) { }

  ngOnInit(): void {
    // this.bookDataService.GetData().subscribe(data => {
    //   // console.log(data);
    //   this.bookList = data;
    // })

    this.sub =  this.bookDataService.GetData().subscribe((data) => this.onDataRetrieved(data));
  }
  
  onDataRetrieved(data: IBook[]): void {
    console.log(data);
    this.bookList = data;
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  deleteBookId(id : number):void{
    if(confirm("Are you sure you want to delete ?"))
    {
      this.bookDataService.deleteBook(id).subscribe(x =>{
        this.refreshPage();
      });
    }
  }
  refreshPage()
  {
    location.reload();
  }

  sortBooks()
  {
   this.bookDataService.SortingBook().subscribe(data => {
    console.log(data);
    this.bookList = data;
   });
  }

 

}

