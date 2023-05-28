import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
    public libros: Book[];
    
    constructor(){
      this.libros = [
      new Book(302010, 0, 'El Secreto', 'Autoayuda', 'Rhonda Byrne', 15.99, 'https://m.media-amazon.com/images/I/51HdLoSQTeL._AC_UF1000,1000_QL80_.jpg'),
      new Book(102030, 0, 'Las 48 leyes del Poder', 'Autoayuda', 'Robert Greene', 18.99, 'https://imagessl5.casadellibro.com/a/l/t5/15/9788423991815.jpg'), 
      new Book(203010, 0, 'El Monje que vendió su Ferrari', 'Autoayuda', 'Robin S Sharma', 12.99, 'https://m.media-amazon.com/images/I/41tyvoqNWGL.jpg')
    ]
    }
    addLibro(id_book:number, id_user, title:string, type:string, author:string, price: number, photo: string){

        let nuevoLibro = new Book(id_book, id_user, title, type, author, price, photo);
        this.libros.push(nuevoLibro);
    }

}
