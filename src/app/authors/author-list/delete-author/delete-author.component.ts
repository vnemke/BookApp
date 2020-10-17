import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { AuthorStoreService } from '../../author-store.service';


import { Author } from '../../Author';

@Component({
	selector: 'app-delete-author',
	templateUrl: './delete-author.component.html',
	styleUrls: ['./delete-author.component.css']
})
export class DeleteAuthorComponent implements OnInit {
	author: Author;
	authors: Author[] = [];
	
	constructor(private api: ApiService, 
		private _mdr: MatDialogRef<DeleteAuthorComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, 
		private authorStore: AuthorStoreService) { 
		
		this.author = data.author;

	}

	ngOnInit(): void {
	}

	onDeleteAuthor() {
		this.api.delete('/api/authors/' + this.author.id)
		.subscribe(() => {
			this.authorStore.deleteAuthor(this.author);
			this._mdr.close(false);
		})
	}

	CloseDialog() {
		this._mdr.close(false);
	}

}
