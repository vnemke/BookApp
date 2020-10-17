import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Book } from './Book'
import { ApiService } from '../api.service';

@Injectable({
	providedIn: 'root'
})
export class getOneBook implements Resolve<Book> {
    
	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
		const id: string = route.params.id;
		return this.api.get('/api/books/'+id);
	}
}