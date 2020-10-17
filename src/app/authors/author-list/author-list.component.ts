import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Author } from '../Author';

import { NewAuthorComponent } from '../new-author/new-author.component';
import { DeleteAuthorComponent } from './delete-author/delete-author.component';

import { MatDialog, MatDialogRef } from "@angular/material/dialog";


@Component({
	selector: 'app-author-list',
	templateUrl: './author-list.component.html',
	styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
	author: Author;
	authors: Author[] = []
	dialogNewAuthor: MatDialogRef<NewAuthorComponent>;
	dialogDeleteAuthor: MatDialogRef<DeleteAuthorComponent>;

	constructor(public route: ActivatedRoute, private matDialog: MatDialog) { }

	ngOnInit(): void {
		this.authors = this.route.snapshot.data.authors
	}

	newAuthorModal() {
		this.dialogNewAuthor = this.matDialog.open(NewAuthorComponent, {
			
			data: { mode: 'create' }
		})

	}

	editAuthorModal(author: Author) {
		this.dialogNewAuthor = this.matDialog.open(NewAuthorComponent, {
			data: {
				mode: 'edit',
				author: author
			}
		})
	}

	deleteAuthorModal(author: Author) {
		this.dialogDeleteAuthor = this.matDialog.open(DeleteAuthorComponent, {
			data: {
				author: author
			},
			disableClose: true
		})
	}
}
