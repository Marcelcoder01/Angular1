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
    // public book: Book;
    
    constructor(private bookService: BooksService){
      this.getAll()
    }

    getAll():void{
      this.bookService.getAll().subscribe((data:Book []) =>{
        this.libros = data;
        console.log(data);
      })
    }

   borrarLibro(id_book:number):void{
    this.bookService.deleteBook(id_book).subscribe((res:any)=>{
      console.log(res)
    })
   }

   buscaLibro(id_book:string):void{

    if (id_book != '') {
      for (let i = 0; i < this.libros.length; i++) {
        if (Number(id_book) == this.libros[i].id_book) {
          this.bookService.getOne(Number(id_book)).subscribe((res: Book[])=>{
            this.libros = res
          });
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
      this.bookService.getAll().subscribe((res:Book[])=>{
        this.libros = res
      });
    }
 
    }



  }

