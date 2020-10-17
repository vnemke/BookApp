import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Genre } from './Genre'
import { ApiService } from '../api.service';

@Injectable({
	providedIn: 'root'
})
export class getOneGenre implements Resolve<Genre> {
    
	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Genre> {
		const id: string = route.params.id;
		return this.api.get('/api/genres/'+id);
	}
}