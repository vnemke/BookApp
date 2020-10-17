import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

import { Author } from '../authors/Author';


@Injectable()
export class getAllAuthors implements Resolve<Author[]> {

	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Author[]> {
		return this.api.get('/api/authors');
	}
}
