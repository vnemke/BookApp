import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Genre } from './Genre';

@Injectable({
	providedIn: 'root'
})
export class GenreStoreService {

	genres: Genre[] = []

	genres$: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>([])

	constructor(public route: ActivatedRoute) {
		this.genres$.next([]);
	}

	loadGenres(genres: Genre[]) {
		this.genres = genres;
		this.genres$.next(this.genres)
	}

	addGenre(genre: Genre) {
		this.genres.push(genre);
		this.genres$.next(this.genres)
	}

	editGenre(genre: Genre) {
		const i = this.genres.findIndex(element => element.id === genre.id);
		this.genres[i] = genre;
		this.genres$.next(this.genres);
	}	

	deleteGenre(genre: Genre) {
		const i = this.genres.findIndex(element => element.id === genre.id);
		this.genres.splice(i, 1);
		this.genres$.next(this.genres);
	}

}
