import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Genre } from '../Genre'

@Component({
	selector: 'app-genre-detail',
	templateUrl: './genre-detail.component.html',
	styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
	genre: Genre

	constructor(public route: ActivatedRoute) { }

	ngOnInit(): void {
		this.genre = this.route.snapshot.data.genres
	}

}
