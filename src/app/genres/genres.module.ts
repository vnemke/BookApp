import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';

import { GenreListComponent } from './genre-list/genre-list.component';
import { NewGenreComponent } from './new-genre/new-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { DeleteGenreComponent } from './genre-list/delete-genre/delete-genre.component';
import { GenreDetailComponent } from './genre-detail/genre-detail.component';

import { getAllGenres } from './genres.resolver';
import { getOneGenre } from './get-one-resolver.service';


const routes: Routes = [
	{
		path: '',
		component: GenreListComponent,
		resolve: { genres: getAllGenres }
		
	},
	{
		path: 'add',
		component: NewGenreComponent
	},
	{
		path: 'edit/:id',
		component: EditGenreComponent,
		
	},
	{
		path: ':id',
		component: GenreDetailComponent,
		resolve: { genre: getOneGenre }
		
	}
]

@NgModule({
	declarations: [
		GenreListComponent,
		NewGenreComponent,
		EditGenreComponent,
		GenreDetailComponent,
		DeleteGenreComponent,
	],
	imports: [
		RouterModule.forChild(routes),
        SharedModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		MatDialogModule
	],
	entryComponents: [NewGenreComponent, DeleteGenreComponent]
})
export class GenresModule { }
