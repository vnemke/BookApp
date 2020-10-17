import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

import { Publisher } from '../../Publisher';
import { PublisherStoreService } from '../../publisher-store.service';

@Component({
	selector: 'app-delete-publisher',
	templateUrl: './delete-publisher.component.html',
	styleUrls: ['./delete-publisher.component.css']
})
export class DeletePublisherComponent implements OnInit {
	url = '/api/publishers/';
	publisher: Publisher;

	constructor(private api: ApiService, 
		private _mdr: MatDialogRef<DeletePublisherComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, 
		private publisherStore: PublisherStoreService) {

			this.publisher = data.publisher
		}

	ngOnInit(): void {
	}

	onDeletePublisher() {
		this.api.delete(this.url + this.publisher.id)
		.subscribe(() => {
			this.publisherStore.deletePublisher(this.publisher);
			this._mdr.close(false);
		})
	}

	CloseDialog() {
		this._mdr.close(false);
	}
}
