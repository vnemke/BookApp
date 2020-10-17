import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';

import { Author } from '../Author';
import { AuthorStoreService } from '../author-store.service';

@Component({
	selector: 'app-new-author',
	templateUrl: './new-author.component.html',
	styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
	url = '/api/authors/';
	newAuthorForm: FormGroup;
	author: Author;
	mode: string;
	buttonText: string;

	verticalPosition: MatSnackBarVerticalPosition = 'bottom';
	

	constructor(private api: ApiService, private _mdr: MatDialogRef<NewAuthorComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, private authorStore: AuthorStoreService, 
		private fb: FormBuilder, private _snackBar: MatSnackBar) {
		

		this.mode = data.mode;
		this.author = data.author;
	}

	ngOnInit(): void {

		if(this.mode === 'create') {
			this.buttonText = 'Add author';
			this.newAuthorForm = this.fb.group({authorName: ['']})
		} else {
			this.buttonText = 'Update author';
			this.newAuthorForm = this.fb.group({authorName: this.author.authorName})
		}
	}

	onAddAuthor() {
		if (this.mode == 'create') {
			this.api.post(this.url, this.newAuthorForm.value)
			.subscribe((author: Author) => {
				this.authorStore.addAuthor(author)
				this._mdr.close(false);
				this._snackBar.open(author.authorName + ' is added', 'End now', {
					duration: 6000,
					verticalPosition: this.verticalPosition
				});
			})

		} else {
			this.api.put('/api/authors/' + this.author.id, this.newAuthorForm.value)
			.subscribe((author: Author) => {
				this.authorStore.editAuthor({...this.author,...this.newAuthorForm.value})
				this._mdr.close(false);
				this._snackBar.open('Author is edited', 'End now', {
					duration: 6000,
					verticalPosition: this.verticalPosition
				});
			})
		}	

	}

}
