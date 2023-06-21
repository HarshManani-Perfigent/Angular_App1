import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { IBook } from '../Ibook';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit , OnDestroy{
  
  bookList?: IBook[];
  sub? : Subscription ;
  constructor(private bookDataService: BookDataService) {}
    ngOnInit(): void {
    // this.bookDataService.GetData().subscribe(data => {
      //   console.log(data);
      // this.bookList = data;
      // });
      this.sub =  this.bookDataService.GetData().subscribe((data) => this.onDataRetrieved(data));
    }
    onDataRetrieved(data: IBook[]): void {
      console.log(data);
      this.bookList = data;
    }
    ngOnDestroy(): void {
      this.sub?.unsubscribe();
    }

}
