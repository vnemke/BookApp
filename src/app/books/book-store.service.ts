import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from './Book';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class BookStoreService {
	book: Book;
	books: Book[] = [];
	filteredBooks: Book[] = [];

	book$: BehaviorSubject<Book> = new BehaviorSubject<any>({})
	books$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
	
	
	constructor(public route: ActivatedRoute) {
		this.filteredBooks = this.books;
				
	}

	loadBooks(books:Book[]){
		this.books = books;
		this.books$.next(this.books);		
	}

	addBook(book:Book) {
		this.books.push(book);
		this.books$.next(this.books);
	}

	getOneBook(id: number) {
		const i = this.books.findIndex(element => element.id == id);
		this.book$.next(this.books[i]);
		return this.book$;
	}

	editBook(book:Book) {
		const i = this.books.findIndex(element => element.id === book.id);
		this.books[i] = book;
		this.book$.next(this.books[i])
		this.books$.next(this.books);
		return this.book$
	}
	
	deleteBook(book:Book){
		const i = this.books.findIndex(element => element.id === book.id);
		this.books.splice(i, 1);
		this.books$.next(this.books);
	}

}
