// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { ApiService } from '../api.service';

// import { Book } from './Book'
// import { BookStoreService } from './book-store.service';

// @Injectable({
// 	providedIn: 'root'
// })
// export class getOneBook implements Resolve<Book> {
    
// 	constructor(private api: ApiService, private bookStore: BookStoreService) { }
// 	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
// 		const id: string = route.params.id;
// 		return this.api.get<Book>('/api/books/'+id).pipe(
// 			tap(book => this.bookStore.getOneBook(book))
// 		)	
// 	}
// }