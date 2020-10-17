import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Author } from '../Author'

@Component({
	selector: 'app-author-detail',
	templateUrl: './author-detail.component.html',
	styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
	author: Author

	constructor(public route: ActivatedRoute) { }

	ngOnInit(): void {
		this.author = this.route.snapshot.data.author
	}

}
