import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';

import { Publisher } from '../Publisher';
import { PublisherStoreService } from '../publisher-store.service';

@Component({
	selector: 'app-new-publisher',
	templateUrl: './new-publisher.component.html',
	styleUrls: ['./new-publisher.component.css']
})
export class NewPublisherComponent implements OnInit {
	url = '/api/publishers/';
	newPublisherForm: FormGroup;
	publisher: Publisher;
	mode: string;
	buttonText: string;

	verticalPosition: MatSnackBarVerticalPosition = 'bottom';

	constructor(private api: ApiService, private _mdr: MatDialogRef<NewPublisherComponent>, 
		@Inject(MAT_DIALOG_DATA) data: any, private publisherStore: PublisherStoreService, 
		private fb: FormBuilder, private _snackBar: MatSnackBar) { 
			
			this.mode = data.mode;
			this.publisher = data.publisher;
		}

	ngOnInit(): void {

		if(this.mode === 'create') {
			this.buttonText = 'Add publisher'
			this.newPublisherForm = this.fb.group({publisherName: ['', [Validators.required]]})
		} else {
			this.buttonText = 'Update publisher';
			this.newPublisherForm = this.fb.group({publisherName: [this.publisher.publisherName, [Validators.required]]})
		}	
	}

	onAddPublisher() {
		if (this.mode == 'create') {
			this.api.post(this.url, this.newPublisherForm.value)
			.subscribe((publisher: Publisher) => {
				this.publisherStore.addPublisher(publisher)
				this._mdr.close(false);
				this._snackBar.open(publisher.publisherName + ' is added', 'End now', {
					duration: 3000,
					verticalPosition: this.verticalPosition
				});
			})
		} else {
			this.api.put(this.url + this.publisher.id, this.newPublisherForm.value)
			.subscribe((publisher: Publisher) => {
				this.publisherStore.editPublisher({...this.publisher,...this.newPublisherForm.value})
				this._mdr.close(false);
				this._snackBar.open('Publisher is edited', 'End now', {
					duration: 3000,
					verticalPosition: this.verticalPosition
				});
			}) 
		}	
	}
}
