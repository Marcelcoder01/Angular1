import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private libros: Book[]
  constructor() {
    this.libros = [
    new Book(302010, 0, 'El Secreto', 'Autoayuda', 'Rhonda Byrne', 15.99, 'https://m.media-amazon.com/images/I/51HdLoSQTeL._AC_UF1000,1000_QL80_.jpg'),
    new Book(102030, 0, 'Las 48 leyes del Poder', 'Autoayuda', 'Robert Greene', 18.99, 'https://imagessl5.casadellibro.com/a/l/t5/15/9788423991815.jpg'), 
    new Book(203010, 0, 'El Monje que vendió su Ferrari', 'Autoayuda', 'Robin S Sharma', 12.99, 'https://m.media-amazon.com/images/I/41tyvoqNWGL.jpg')
  ] 
}
  getAll():Book[]{
    return this.libros
  }

  getOne(id_book:number):Book{
    let libro:Book = null

    for (let i = 0; i < this.libros.length; i++) {
      if(id_book == this.libros[i].id_book){
        libro = this.libros[i]}
  }
  return libro 
  }

  addBook(book:Book):void {
    this.libros.push(book);
  }

  edit(book:Book):boolean{
    let encontrado: boolean = false

    for (let i = 0; i < this.libros.length; i++) {
      if(book.id_book == this.libros[i].id_book){
         encontrado = true; 
        this.libros[i] = book
      }
  }
  return encontrado
}
  delete(id_book: number):boolean{

    let encontrado: boolean = false

    for (let i = 0; i < this.libros.length; i++) {
      if(id_book == this.libros[i].id_book){
        encontrado = true; this.libros.splice(i, 1)}
       }
     return encontrado
  }
}
