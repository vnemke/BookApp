import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { PublisherListComponent } from './publisher-list/publisher-list.component';
import { NewPublisherComponent } from './new-publisher/new-publisher.component';
import { EditPublisherComponent } from './edit-publisher/edit-publisher.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { DeletePublisherComponent } from './publisher-list/delete-publisher/delete-publisher.component';

import { getAllPublishers } from './publishers.resolver';
import { getOnePublisher } from './get-one-resolver.service';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
	{
		path: '',
		component:  PublisherListComponent,
		resolve: { publishers: getAllPublishers }
	},
	{
		path: 'add',
		component: NewPublisherComponent
	},
	{
		path: 'edit/:id',
		component: EditPublisherComponent

	},
	{
		path: ':id',
		component: PublisherDetailComponent,
		resolve: { publisher: getOnePublisher }
	}
];

@NgModule({
	declarations: [
		PublisherListComponent,
		NewPublisherComponent,
		EditPublisherComponent,
		PublisherDetailComponent,
		DeletePublisherComponent
	],
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		MatDialogModule
	],
	entryComponents: [ NewPublisherComponent, DeletePublisherComponent ]
})
export class PublishersModule { }
