import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from 'src/app/pages/books/books.component';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  @Input() libro: Book;
  @Input() even: boolean;
  @Output() bookTitle = new EventEmitter<number>();
 

 borrarLibro(): void{
  this.bookTitle.emit(this.libro.id_book);
 }
}
 