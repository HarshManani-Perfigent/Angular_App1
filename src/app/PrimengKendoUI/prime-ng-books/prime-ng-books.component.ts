import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/Ibook';
import { BookDataService } from 'src/app/book-data.service';
import * as FileSaver from 'file-saver';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-prime-ng-books',
  templateUrl: './prime-ng-books.component.html',
  styleUrls: ['./prime-ng-books.component.css']
})
export class PrimeNgBooksComponent implements OnInit, OnDestroy {
  
  bookList! : IBook[];
  sub? : Subscription;
  filterText = "";
  selectedBooks! : IBook;
 

  constructor(private bookDataService : BookDataService ) { }

  ngOnInit(): void {
    this.sub =  this.bookDataService.GetData().subscribe((data) => this.onDataRetrieved(data));
  }
  
  onDataRetrieved(data: IBook[]): void {
    console.log(data);
    this.bookList = data;
  }
  
  exportExcel()
  {
    import ("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.bookList);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: Buffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'bookList');
    })
  }
  saveAsExcelFile(buffer: Buffer, fileName: string):void {
    let Excel_Type ='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let Excel_Extension = '.xlsx'
    const data: Blob = new Blob([buffer], {
      type: Excel_Type
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime()+Excel_Extension);
  }

  exportCSV(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Book List',
      useBom: true,
      noDownload: false,
      headers: ["id", "title", "rate"]
    };
    
  new ngxCsv(this.bookList, 'booklist', options);
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  // deleteBookId(id : number):void{
  //   if(confirm("Are you sure you want to delete ?"))
  //   {
  //     this.bookDataService.deleteBook(id).subscribe(x =>{
  //       this.refreshPage();
  //     });
  //   }
  // }
  // refreshPage()
  // {
  //   location.reload();
  // }

  // sortBooks()
  // {
  //  this.bookDataService.SortingBook().subscribe(data => {
  //   console.log(data);
  //   this.bookList = data;
  //  });
  // }
}
