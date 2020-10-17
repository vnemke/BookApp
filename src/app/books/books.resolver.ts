import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

import { Book } from './Book'
import { BookStoreService } from './book-store.service';


@Injectable({
	providedIn: 'root'
})
export class getAllBooks implements Resolve<Book[]> {

	constructor(private api: ApiService, private bookStore: BookStoreService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {
		return this.api.get<Book[]>('/api/books').pipe(
			tap(books=> this.bookStore.loadBooks(books))
		);
	}
}
