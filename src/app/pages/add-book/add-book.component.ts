import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public book: Book;
  public libros: Book[];
    
  constructor(public bookService:BooksService, public router: Router ){
     this.libros = this.bookService.getAll()
  }

  addBook(
    id_book: string, id_user: string, title: string, type: string, author: string, price: number, photo: string)
    {let code_libro: number = Number(id_book);
    let code_user: number = Number(id_user);
    let book: Book = new Book(code_libro,code_user,title,type,author,price,photo);
    this.bookService.addBook(book);

    this.router.navigateByUrl('/books');
    }
  }

