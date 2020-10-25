import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { Book } from '../Book';
import { Author } from 'src/app/authors/Author';
import { Genre } from 'src/app/genres/Genre';
import { Publisher } from 'src/app/publishers/Publisher';

import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { NewBookComponent } from '../new-book/new-book.component';
import { DeleteBookComponent } from '../book-list/delete-book/delete-book.component';

import { BookStoreService } from '../book-store.service';



@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
	book: Book;
	books: Book[] = [];
	authors: Author[] = [];
	genres: Genre[] = [];
	publishers: Publisher[] = [];
	dialogNewBook: MatDialogRef<NewBookComponent>;
	dialogDeleteBook: MatDialogRef<DeleteBookComponent>;


	constructor(public route: ActivatedRoute, private api: ApiService, private matDialog: MatDialog, private bookStore: BookStoreService) { }


	editBookModal(book: Book) {
		this.dialogNewBook = this.matDialog.open(NewBookComponent, {
			data: {
				mode: 'edit',
				book: book,
				authors: this.authors,
				genres: this.genres,
				publishers: this.publishers
			}
		})
	}

	deleteBookModal(book:Book) {
		this.dialogDeleteBook = this.matDialog.open(DeleteBookComponent, {
			data: { 
				book: book
			},
			disableClose: true,
		});
	}

	ngOnInit(): void {	
		this.books = this.route.snapshot.data.books;
		this.genres = this.route.snapshot.data.genres;
		this.publishers = this.route.snapshot.data.publishers;	
		this.authors = this.route.snapshot.data.authors;

		console.log(this.route);
		

		const id: number =  this.route.snapshot.params.id;

		this.bookStore.loadBooks(this.books);
				
		this.bookStore.getOneBook(id).subscribe((book:Book) => {
			this.book = book;
		})
	}	
}
