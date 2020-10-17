import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Publisher } from '../Publisher';
import { NewPublisherComponent } from '../new-publisher/new-publisher.component';
import { DeletePublisherComponent } from './delete-publisher/delete-publisher.component';

@Component({
	selector: 'app-publisher-list',
	templateUrl: './publisher-list.component.html',
	styleUrls: ['./publisher-list.component.css']
})
export class PublisherListComponent implements OnInit {
	publishers: Publisher[] = []

	dialogNewPublisher: MatDialogRef<NewPublisherComponent>;
	dialogDeletePublisher: MatDialogRef<DeletePublisherComponent>

	constructor(public route: ActivatedRoute, private matDialog: MatDialog) { }

	ngOnInit(): void {
		this.publishers = this.route.snapshot.data.publishers		
	}

	newPublisherModal() {
		this.dialogNewPublisher = this.matDialog.open(NewPublisherComponent, {
			data: { mode: 'create' }
		})
	}

	editPublisherModal(publisher: Publisher) {
		this.dialogNewPublisher = this.matDialog.open(NewPublisherComponent, {
			data: {
				mode: 'edit',
				publisher: publisher
			}
		})
	}

	deletePublisherModal(publisher: Publisher) {
		this.dialogDeletePublisher = this.matDialog.open(DeletePublisherComponent, {
			data: {
				publisher: publisher
			}
		})
	}
}
