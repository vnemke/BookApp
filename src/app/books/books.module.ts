import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';

import { BookListComponent } from './book-list/book-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DeleteBookComponent } from './book-list/delete-book/delete-book.component'

import { getAllBooks } from './books.resolver';
import { getAllAuthors } from './authors.resolver';
import { getAllGenres } from './genres.resolver'
import { getAllPublishers } from './publishers.resolver';


const routes: Routes = [
    {
        path: '',
        component: BookListComponent,
        resolve: { 
            books: getAllBooks,
            authors: getAllAuthors, 
            genres: getAllGenres,
            publishers: getAllPublishers
        },
    },
    {
        path: 'add',
        component: NewBookComponent,
        resolve: 
        {   
            authors: getAllAuthors, 
            genres: getAllGenres,
            publishers: getAllPublishers
        }
    },
    {
        path: 'edit/:id',
        component: EditBookComponent,
    },
    {
        path: ':id',
        component: BookDetailComponent,
        resolve: {
            books: getAllBooks, 
            authors: getAllAuthors, 
            genres: getAllGenres,
            publishers: getAllPublishers 
        }
    }
];

@NgModule({
	declarations: [
        BookListComponent,
        NewBookComponent,
        EditBookComponent,
        BookDetailComponent,
        DeleteBookComponent
    ],
	imports: [
        RouterModule.forChild(routes),
        SharedModule,
		FormsModule,
		MaterialModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    entryComponents: [ NewBookComponent, EditBookComponent, DeleteBookComponent ],
    providers: [getAllAuthors],
})
export class BooksModule { }