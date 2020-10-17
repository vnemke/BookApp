import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Author } from './Author';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthorStoreService {

	authors: Author[] = [];

	authors$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([])

	constructor(public route: ActivatedRoute) {
		this.authors$.next([]);
	}

	loadAuthors(authors: Author[]) {
		this.authors = authors;
		this.authors$.next(this.authors)
	}

	addAuthor(author: Author) {
		this.authors.push(author);
		this.authors$.next(this.authors);
	}

	editAuthor(author: Author) {
		const i = this.authors.findIndex(element => element.id === author.id);
		this.authors[i] = author;
		this.authors$.next(this.authors)
	}

	deleteAuthor(author: Author) {
		const i = this.authors.findIndex(element => element.id === author.id);
		this.authors.splice(i, 1);
		this.authors$.next(this.authors);
	}
}
