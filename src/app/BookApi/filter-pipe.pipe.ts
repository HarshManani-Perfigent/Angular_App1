import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../Ibook';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(bookList : IBook[] | undefined , filterText : string): IBook[] | undefined {
   if(!bookList || !filterText)
   { 
    return bookList;
   }
   return bookList.filter(book => book.title.toLowerCase().startsWith(filterText.toLowerCase())); 
  }
}

 //return bookList.filter(book => book.title.toLowerCase().indexOf(filterText.toLowerCase()) !== -1); 