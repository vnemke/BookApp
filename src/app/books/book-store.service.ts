import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './Book';
import { Author } from '../authors/Author';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BookStoreService {

	books: Book[] = [];
	filteredBooks: Book[] = [];

	books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
	
	constructor(public route: ActivatedRoute) {
		this.filteredBooks = this.books;
		this.books$.next([]);
	}


	loadBooks(books:Book[]){
		this.books = books;
		this.books$.next(this.books);
	}

	addBook(book:Book) {
		this.books.push(book);
		this.books$.next(this.books);
	}

	editBook(book:Book) {
		const i = this.books.findIndex(element => element.id === book.id);
		this.books[i] = book;
		this.books$.next(this.books)
	}
	
	deleteBook(book:Book){
		const i = this.books.findIndex(element => element.id === book.id);
		this.books.splice(i, 1);
		this.books$.next(this.books);
	}

}
