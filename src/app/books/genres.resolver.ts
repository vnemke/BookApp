import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

import { Genre } from '../genres/Genre'

@Injectable({
	providedIn: 'root'
})
export class getAllGenres implements Resolve<Genre[]> {

	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Genre[]> {
		return this.api.get('/api/genres');
	}
}