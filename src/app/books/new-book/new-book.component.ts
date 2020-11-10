import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

import { Book } from '../Book'
import { Author } from '../../authors/Author';
import { Genre } from '../../genres/Genre';
import { Publisher } from '../../publishers/Publisher'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookStoreService } from '../book-store.service';


@Component({
	selector: 'app-new-book',
	templateUrl: './new-book.component.html',
	styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
	url = '/api/books';
	newBookForm: FormGroup;
	authors: Author[] = [];
	genres: Genre[] = [];
	publishers: Publisher[] = [];
	book: Book;
	mode: string;
	buttonText: string;

	verticalPosition: MatSnackBarVerticalPosition = 'bottom';

	constructor(private api: ApiService, private _mdr: MatDialogRef<NewBookComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, private bookStore:BookStoreService, 
		private fb: FormBuilder, private _snackBar: MatSnackBar) { 

		this.authors = data.authors;
		this.genres = data.genres;
		this.publishers = data.publishers;	

		this.mode = data.mode;
		this.book = data.book;		
	}
	
	ngOnInit(): void {
		if(this.mode == 'create') {
			this.buttonText = 'Add book';
			this.newBookForm = this.fb.group({
				bookName: ['', [Validators.required, Validators.minLength(3)]],
				authors: ['', [Validators.required]],
				genres: ['', [Validators.required]],
				PublisherId: ['', [Validators.required]],
				releaseYear: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
				price: ['', [Validators.required]],
				description: ['']
			})
		} else {
			this.buttonText = 'Update book';
			const authors = this.book.Authors.map(a => a.id);
			const genres = this.book.Genres.map(genre => genre.id)

			this.newBookForm = this.fb.group({
				bookName: [this.book.bookName, [Validators.required, Validators.minLength(3)]],
				authors: [authors, [Validators.required]],
				genres: [genres, [Validators.required]],
				PublisherId: [this.book.Publisher.id, [Validators.required]],
				releaseYear: [this.book.releaseYear, [Validators.required, Validators.pattern("^[0-9]*$")]],
				price: [this.book.price, [Validators.required]],
				description: [this.book.description, [Validators.required]] 
			})
		}
	}

	onAddBook() {
		if(this.mode == 'create') {
			this.api.post(this.url, this.newBookForm.value)
			.subscribe((book: Book) => {
				this.bookStore.addBook(book)
				this._mdr.close(false);
				this._snackBar.open(book.bookName + ' is added', 'End now', {
					duration: 6000,
					verticalPosition: this.verticalPosition
				});
			})		
		} else {
			this.api.put('/api/books/' + this.book.id, this.newBookForm.value)
			.subscribe((book:Book) => {
				this.bookStore.editBook(book);
				this._mdr.close(false);
				this._snackBar.open(book.bookName + ' is edited', 'End now', {
					duration: 6000,
					verticalPosition: this.verticalPosition
				});
			})
		}
	}	
}
