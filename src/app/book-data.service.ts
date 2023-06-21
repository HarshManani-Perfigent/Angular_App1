import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBook } from './Ibook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http : HttpClient) { }
    GetData() : Observable<IBook[]> {
    return this.http.get<IBook[]>('http://192.168.1.11/perfigentbookapi/api/Book/GetAllBook');
  }

  insertBook(book : IBook):Observable<IBook>{
    return this.http.post<IBook>('http://192.168.1.11/perfigentbookapi/api/Book/InsertBook', book);
  }

  editBook(book : IBook):Observable<IBook>{
    // debugger
    return this.http.put<IBook>('http://192.168.1.11/perfigentbookapi/api/Book/UpdateBook',book);
  }

  deleteBook(book : number):Observable<IBook>{
    return this.http.delete<IBook>(`http://192.168.1.11/perfigentbookapi/api/Book/DeleteBook/${book}`);
  }

  SortingBook():Observable<IBook[]>{
    return this.http.get<IBook[]>('http://192.168.1.11/perfigentbookapi/api/Book/SortedBook');
  }
  
}
