import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

import { Genre } from '../../Genre';
import { GenreStoreService } from '../../genre-store.service';

@Component({
	selector: 'app-delete-genre',
	templateUrl: './delete-genre.component.html',
	styleUrls: ['./delete-genre.component.css']
})
export class DeleteGenreComponent implements OnInit {
	url = '/api/genres/';
	genre: Genre;
	genres: Genre[] = [];

	constructor(private api: ApiService, 
		private _mdr: MatDialogRef<DeleteGenreComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, 
		private genreStore: GenreStoreService) { 
		
		this.genre = data.genre;
	}

	ngOnInit(): void {
	}

	onDeleteGenre(){
		this.api.delete(this.url + this.genre.id)
		.subscribe(() => {
			this.genreStore.deleteGenre(this.genre);
			this._mdr.close(false);
		})
	}

	CloseDialog() {
		this._mdr.close(false);
	}

	
}
