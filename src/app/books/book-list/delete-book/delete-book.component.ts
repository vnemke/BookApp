import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from '@angular/router';


import { ApiService } from '../../../api.service';

import { Book } from '../../Book';
import { BookStoreService } from '../../book-store.service';

@Component({
	selector: 'app-delete-book',
	templateUrl: './delete-book.component.html',
	styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
	book: Book;
	books: Book[] = [];
	deleteDisabled: boolean = true; 

	constructor(private api: ApiService, 
		private _mdr: MatDialogRef<DeleteBookComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, 
		private bookStore:BookStoreService, 
		private router: Router) { 

		this.book = data.book;
		
	}
	ngOnInit(): void { }


	onDeleteBook() {
		this.api.delete('/api/books/' + this.book.id)
		.subscribe(() => {
			this.bookStore.deleteBook(this.book);
			this.router.navigate(['books'])
			this._mdr.close(false);
		})
	}

	CloseDialog() {
		this._mdr.close(false);
	}

}
