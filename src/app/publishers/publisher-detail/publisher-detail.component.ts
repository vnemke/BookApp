import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Publisher } from '../Publisher'

@Component({
	selector: 'app-publisher-detail',
	templateUrl: './publisher-detail.component.html',
	styleUrls: ['./publisher-detail.component.css']
})
export class PublisherDetailComponent implements OnInit {
	publisher: Publisher

	constructor(public route: ActivatedRoute) { }

	ngOnInit(): void {
		this.publisher = this.route.snapshot.data.publisher
	}

}
