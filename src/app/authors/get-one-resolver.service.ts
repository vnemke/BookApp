import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

import { Author } from './Author';


@Injectable({
	providedIn: 'root'
})
export class getOneAuthor implements Resolve<Author> {

	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Author> {
        const id: string = route.params.id;
		return this.api.get('/api/authors/'+id);
	}
}
