import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

import { Genre } from './Genre'
import { GenreStoreService } from './genre-store.service';

@Injectable({
	providedIn: 'root'
})
export class getAllGenres implements Resolve<Genre[]> {

	constructor(private api: ApiService, private genreStore: GenreStoreService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Genre[]> {
		return this.api.get<Genre[]>('/api/genres')
		.pipe(
			tap(genres => this.genreStore.loadGenres(genres))
		)
	}
}