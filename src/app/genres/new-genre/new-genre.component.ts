import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';

import { Genre } from '../Genre';
import { GenreStoreService } from '../genre-store.service';


@Component({
	selector: 'app-new-genre',
	templateUrl: './new-genre.component.html',
	styleUrls: ['./new-genre.component.css']
})
export class NewGenreComponent implements OnInit {
	url = '/api/genres/';
	newGenreForm: FormGroup;
	genre: Genre;
	mode: string;
	buttonText: string;

	verticalPosition: MatSnackBarVerticalPosition = 'bottom';

	constructor(private api: ApiService, private _mdr: MatDialogRef<NewGenreComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, private genreStore: GenreStoreService, 
		private fb: FormBuilder, private _snackBar: MatSnackBar) { 
			
		this.mode = data.mode;
		this.genre = data.genre;
	}

	ngOnInit(): void {
		if (this.mode == 'create') {
			this.buttonText = 'Add genre'
			this.newGenreForm = this.fb.group({genreName: ['']})
		} else {
			this.buttonText = 'Update genre'
			this.newGenreForm = this.fb.group({genreName: this.genre.genreName})
		}	
	}

	onAddGenre() {
		if (this.mode == 'create') {
			this.api.post(this.url, this.newGenreForm.value)
			.subscribe((genre: Genre) => {
				this.genreStore.addGenre(genre)
				this._mdr.close(false);
				this._snackBar.open(genre.genreName + ' is added', 'End now', {
					duration: 3000,
					verticalPosition: this.verticalPosition
				})
			})
		} else {
			this.api.put(this.url + this.genre.id, this.newGenreForm.value)
			.subscribe((genre: Genre) => {
				this.genreStore.editGenre({...this.genre,...this.newGenreForm.value})
				this._mdr.close(false);
				this._snackBar.open('Genre is edited', 'End now', {
					duration: 3000,
					verticalPosition: this.verticalPosition
				})
			})
		}
	}
}
