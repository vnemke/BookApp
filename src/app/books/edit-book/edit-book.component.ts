import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

import { Book } from '../Book';
import { Author } from 'src/app/authors/Author';
import { Genre } from 'src/app/genres/Genre';
import { Publisher } from 'src/app/publishers/Publisher';

import { BookStoreService } from '../book-store.service';


@Component({
	selector: 'app-edit-book',
	templateUrl: './edit-book.component.html',
	styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit { 
	
	myForm: FormGroup;
	book: Book;
	authors: Author[] = [];
	genres: Genre[] = [];
	publishers: Publisher[] = []

	constructor(private api: ApiService, 
		private _mdr: MatDialogRef<EditBookComponent>, 
		private bookStore:BookStoreService, 
		@Inject(MAT_DIALOG_DATA) data: any, 
		private fb: FormBuilder ) {
		
		this.book = data.book
		this.authors = data.authors;
		this.genres = data.genres;
		this.publishers = data.publishers;
	}

	ngOnInit(): void {
		const authors = this.book.Authors.map(a => a.id);
		const genres = this.book.Genres.map(genre => genre.id)		

		this.myForm = this.fb.group({
			bookName: this.book.bookName,
			authors: [authors],
			genres: [genres],
			PublisherId: [this.book.Publisher.id],
			releaseYear: this.book.releaseYear,
			price: this.book.price,
			description: this.book.description 
		})

	}		

	onEditBook() {
	
	}
}
