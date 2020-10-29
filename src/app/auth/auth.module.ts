import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatDialogModule } from '@angular/material/dialog';


const routes: Routes = [
	{
		path: '',
		component: SignInComponent
	
	},
	{
		path: 'signup',
		component: SignUpComponent
	},
];

@NgModule({
	declarations: [
		SignInComponent,
		SignUpComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
		FormsModule,
		MaterialModule,
        ReactiveFormsModule,
        MatDialogModule
	]
})
export class AuthModule { }
