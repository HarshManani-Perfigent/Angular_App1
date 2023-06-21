import { Component, OnInit } from '@angular/core';
import { ButtonThemeColor } from '@progress/kendo-angular-buttons';
import { SVGIcon, filePdfIcon, fileExcelIcon ,fileCsvIcon } from "@progress/kendo-svg-icons";
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/Ibook';
import { BookDataService } from 'src/app/book-data.service';
import { process } from "@progress/kendo-data-query";
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-kendo-uibooks',
  templateUrl: './kendo-uibooks.component.html',
  styleUrls: ['./kendo-uibooks.component.css']
})

export class KendoUIBooksComponent implements OnInit {
  bookList! : IBook[];
  sub? : Subscription;
  public pdfSVG: SVGIcon = filePdfIcon;
  public excelSVG: SVGIcon = fileExcelIcon;
  public csvSVG: SVGIcon = fileCsvIcon
  public gridView!: IBook[];
  public mySelection: IBook[] = [];

  constructor(private bookDataService : BookDataService ) { }

  ngOnInit(): void {
    this.sub =  this.bookDataService.GetData().subscribe((data) => this.onDataRetrieved(data));
  }
  
  onDataRetrieved(data: IBook[]): void {
    this.bookList = data; 
    this.gridView = data;
    console.log(this.bookList);
  }
  public onFilter(input: Event): void {
    const inputValue = (input.target as HTMLInputElement).value;
    this.gridView = process(this.bookList, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "id",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "title",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "rate",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
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
}
