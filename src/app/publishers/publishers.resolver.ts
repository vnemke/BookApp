import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

import { Publisher } from './Publisher';
import { PublisherStoreService } from './publisher-store.service';


@Injectable({
	providedIn: 'root'
})
export class getAllPublishers implements Resolve<Publisher[]> {

	constructor(private api: ApiService, private publisherStore: PublisherStoreService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Publisher[]> {
		return this.api.get<Publisher[]>('/api/publishers')
		.pipe(
			tap(publishers => this.publisherStore.loadPublishers(publishers))
		)
	}
}
