import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.service';
import { Book } from './model/Book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  bookService: BookService;
  books: any;

  constructor(private service: BookService) {
    this.bookService = service;
  }

  ngOnInit(): void {
    this.books = this.service.getBook().subscribe((books) => { this.books = books });
  }

}
