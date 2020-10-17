import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthorListComponent } from './author-list/author-list.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { DeleteAuthorComponent } from './author-list/delete-author/delete-author.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

import { getAllAuthors } from './authors.resolver';
import { getOneAuthor } from './get-one-resolver.service';


const routes: Routes = [
	{
		path: '',
		component: AuthorListComponent,
		resolve: { authors: getAllAuthors }
		
	},
	{
		path: 'add',
		component: NewAuthorComponent
	},
	{
		path: 'edit/:id',
		component: EditAuthorComponent

	},
	{
		path: ':id',
		component: AuthorDetailComponent,
		resolve: { author: getOneAuthor }
	}
];

@NgModule({
	declarations: [
		AuthorListComponent,
		NewAuthorComponent,
		EditAuthorComponent,
		AuthorDetailComponent,
		DeleteAuthorComponent
	],
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		MatDialogModule
	],
	entryComponents: [NewAuthorComponent, DeleteAuthorComponent]
})
export class AuthorsModule { }
