import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Genre } from '../Genre'
import { NewGenreComponent } from '../new-genre/new-genre.component';
import { DeleteGenreComponent } from './delete-genre/delete-genre.component';

@Component({
	selector: 'app-genre-list',
	templateUrl: './genre-list.component.html',
	styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {
	genres: Genre[] = []
	dialogNewGenre: MatDialogRef<NewGenreComponent>;
	dialogDeleteGenre: MatDialogRef<DeleteGenreComponent>

	constructor(public route: ActivatedRoute, private matDialog: MatDialog) { }

	ngOnInit(): void {
		this.genres = this.route.snapshot.data.genres
	}

	newGenreModal() {
		this.dialogNewGenre = this.matDialog.open(NewGenreComponent, {
			data: { mode: 'create'}
		})
	}

	editGenreModal(genre: Genre) {
		this.dialogNewGenre = this.matDialog.open(NewGenreComponent, {
			data: { 
				mode: 'edit',
				genre: genre
			}
		})
	}

	deleteGenreModal(genre: Genre) {
		this.dialogDeleteGenre = this.matDialog.open(DeleteGenreComponent, {
			data: {
				genre: genre
			}
		})
	}
}
