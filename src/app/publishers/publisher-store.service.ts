import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Publisher } from './Publisher';

@Injectable({
	providedIn: 'root'
})
export class PublisherStoreService {

	publishers: Publisher[] = [];

	publishers$: BehaviorSubject<Publisher[]> = new BehaviorSubject<Publisher[]>([])

	constructor(public route: ActivatedRoute) {
		this.publishers$.next([])
	}

	loadPublishers(publishers: Publisher[]) {
		this.publishers = publishers;
		this.publishers$.next(this.publishers);
	}

	addPublisher(publisher: Publisher) {
		this.publishers.push(publisher);
		this.publishers$.next(this.publishers);
	}

	editPublisher(publisher: Publisher) {
		const i = this.publishers.findIndex(element => element.id === publisher.id);
		this.publishers[i] = publisher;
		this.publishers$.next(this.publishers);
	}

	deletePublisher(publisher: Publisher) {
		const i = this.publishers.findIndex(element => element.id === publisher.id);
		this.publishers.splice(i, 1);
		this.publishers$.next(this.publishers);
	}
}
