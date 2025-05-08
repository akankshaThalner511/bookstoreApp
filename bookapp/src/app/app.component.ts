import { Component, Inject } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  msg: string="";
  book: Book = new Book(1, "Spring", 20);

  books: Book[] = [];

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getData() {
    this.http.get<Book[]>("http://localhost:9998/books",{responseType: 'json'})
      .subscribe(data => {
        this.books = data;
      });
  }


  onInsertClick(){
    this.http.post("http://localhost:9998/book",this.book,{responseType: "text"})
      .subscribe(data => {
       this.msg = data;
      });
  }

}
