import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public book: Book;
  public libros: Book[];
    
  constructor(public bookService:BooksService, public router: Router ){
  }


  updateLibro(
    id_book: number, id_user: number, title: string, type: string, author: string, price: number, photo: string
  ){let code_libro: number = Number(id_book);
    let code_user: number = Number(id_user);
    let book: Book = new Book(code_libro,code_user,title,type,author,price,photo);
    this.bookService.editBook(id_book).subscribe((res:Book[])=>{
      this.libros = res});

    this.router.navigateByUrl('/books');
  }
}
