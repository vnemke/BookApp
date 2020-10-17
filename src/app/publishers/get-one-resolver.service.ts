import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

import { Publisher } from './Publisher';


@Injectable({
	providedIn: 'root'
})
export class getOnePublisher implements Resolve<Publisher> {

	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Publisher> {
        const id: string = route.params.id;
		return this.api.get('/api/publishers/'+id);
	}
}
