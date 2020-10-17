import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

import { Author } from './Author';
import { AuthorStoreService } from './author-store.service'


@Injectable({
	providedIn: 'root'
})
export class getAllAuthors implements Resolve<Author[]> {

	constructor(private api: ApiService, private authorStore: AuthorStoreService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Author[]> {
		return this.api.get<Author[]>('/api/authors')
		.pipe(
			tap(authors => this.authorStore.loadAuthors(authors))
		)
	}
}
