import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
    public libros: Book[];
    public book: Book;
    
    constructor(public booksService:BooksService){
        this.libros = this.booksService.getAll();
    }

   borrarLibro(id_book:number):void{
    this.booksService.delete(id_book)
   }

   buscaLibro(id_book:string):void{
    if (id_book != '') {
      for (let i = 0; i < this.libros.length; i++) {
        if (Number(id_book) == this.libros[i].id_book) {
          this.libros = [this.booksService.getOne(Number(id_book))];
        }else{
          let buscaLibroArray:Book[] = [];
          for (const book of this.libros) {
            if (book.id_book.toString().indexOf(id_book) !== -1) {
              buscaLibroArray.push(book);
            }
          }
          this.libros = buscaLibroArray;
        }
      }
    }else{
      this.libros = this.booksService.getAll();
    }
  }
}
