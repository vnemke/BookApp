import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ 
		path: '', 
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{ 
		path: 'books', 
		loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
	},
	{ 
		path: 'authors', 
		loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule)
	},
	{ 
		path: 'genres', 
		loadChildren: () => import('./genres/genres.module').then(m => m.GenresModule)
	},
	{ 
		path: 'publishers', 
		loadChildren: () => import('./publishers/publishers.module').then(m => m.PublishersModule)
	}

];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],	
	exports: [RouterModule]
})
export class AppRoutingModule { }
