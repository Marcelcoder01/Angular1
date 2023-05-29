import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksComponent } from 'src/app/pages/books/books.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() libro: Book;
    @Input() even: boolean;
    @Output() nameLibro = new EventEmitter<string>();

    enviarLibro():void{
      this.nameLibro.emit(this.libro.title)
    }
}
 