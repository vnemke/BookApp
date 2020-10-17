import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

import { Publisher } from '../publishers/Publisher';


@Injectable({
	providedIn: 'root'
})
export class getAllPublishers implements Resolve<Publisher[]> {

	constructor(private api: ApiService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Publisher[]> {
		return this.api.get('/api/publishers');
	}
}
