import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../Book';
import { Author } from '../../authors/Author';
import { Genre } from 'src/app/genres/Genre';
import { Publisher } from 'src/app/publishers/Publisher';

import { NewBookComponent } from '../new-book/new-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component'

import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BookStoreService } from '../book-store.service';


@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, AfterViewInit {
	
	// book: Book;
	authors: Author[] = [];
	genres: Genre[] = [];
	publishers: Publisher[] = [];
	filteredBooks: Book[] = [];
	displayedColumns: string[];
	dataSource: MatTableDataSource<Book>
	dialogNewBook: MatDialogRef<NewBookComponent>;
	dialogDeleteBook: MatDialogRef<DeleteBookComponent>;

	@ViewChild(MatTable) table:MatTable<any>;

	constructor(public route: ActivatedRoute, private matDialog: MatDialog, private bookStore: BookStoreService) { 
		this.dataSource = new MatTableDataSource(this.filteredBooks);
	}

	// delete modal
	deleteBookModal(book:Book) {
		this.dialogDeleteBook = this.matDialog.open(DeleteBookComponent, {
			data: { 
				book: book
			},
			disableClose: true,
		});
	}

	newBookModal() {
		this.dialogNewBook = this.matDialog.open(NewBookComponent, {
			data: {
				mode: 'create',
				authors: this.authors,
				genres: this.genres,
				publishers: this.publishers
			}
		})
	}

	editBookModal(book: Book) {
		this.dialogNewBook = this.matDialog.open(NewBookComponent, {
			data: {
				mode: 'edit',
				book: book,
				authors: this.authors,
				genres: this.genres,
				publishers: this.publishers
			}
		})
	}

	ngOnInit(): void {
		this.displayedColumns  = ['id', 'bookName', 'authorName', 'genreName', 'publisherName', 'price', 'action'];

		this.bookStore.books$.subscribe((books)=> {
			this.dataSource.data = books;
			this.filteredBooks = books;
		});

		this.authors = this.route.snapshot.data.authors;
		this.genres = this.route.snapshot.data.genres;
		this.publishers = this.route.snapshot.data.publishers;	
		
	}

	//sorting
	@ViewChild(MatSort, {static: false}) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.sort = this.sort;		
	}

	//menu toggle
	@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
	someMethod() {
		this.trigger.openMenu();
	}

	//search book
	onTypeBook(event) {
		if(event.target.value=='') {
			this.dataSource.filter='';
			return;
		}
		this.dataSource.filter = event.target.value;
		
	}


}
