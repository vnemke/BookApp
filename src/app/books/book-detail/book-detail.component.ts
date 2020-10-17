import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import { Book } from '../Book';

@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.css']
})


export class BookDetailComponent implements OnInit {
	book: Book

	constructor(public route: ActivatedRoute, private api: ApiService) { }

	ngOnInit(): void {
		this.book = this.route.snapshot.data.book
		console.log(this.route);
		
	}
	
	onDeleteBook() {
		const id = this.book.id
		this.api.delete('/api/books/'+id).subscribe();
	}
}
